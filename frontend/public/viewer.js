/* eslint-disable no-undef */
/* global THREE */
/* ================= Visor 3D interactivo (Three.js) =================
   Genera geometrías metálicas procedurales para cada tipo de pieza
   y permite girarlas con el ratón / dedo (OrbitControls). */

const Viewer3D = (function () {
  let renderer, scene, camera, controls, group, raf;
  let autoRotate = true;
  let canvas;

  function metalMaterial(color) {
    return new THREE.MeshStandardMaterial({
      color: color || 0xb9c0c9,
      metalness: 0.95,
      roughness: 0.32
    });
  }
  const galvMat = () => metalMaterial(0xc2c9d1);   // galvanizado
  const darkMat = () => metalMaterial(0x8b93a0);   // acero oscuro
  const holeMat = () => new THREE.MeshStandardMaterial({ color: 0x2a2f37, metalness: 0.6, roughness: 0.7 });

  /* Placa rectangular con taladros pasantes (ExtrudeGeometry con holes).
     w,h en el plano XY; t = espesor (eje Z). holes = [{x,y,r}] */
  function makePlate(w, h, t, holes, mat) {
    const shape = new THREE.Shape();
    shape.moveTo(-w / 2, -h / 2);
    shape.lineTo(w / 2, -h / 2);
    shape.lineTo(w / 2, h / 2);
    shape.lineTo(-w / 2, h / 2);
    shape.lineTo(-w / 2, -h / 2);
    (holes || []).forEach(hh => {
      const path = new THREE.Path();
      path.absarc(hh.x, hh.y, hh.r, 0, Math.PI * 2, false);
      shape.holes.push(path);
    });
    const geo = new THREE.ExtrudeGeometry(shape, { depth: t, bevelEnabled: true, bevelThickness: t * 0.12, bevelSize: t * 0.12, bevelSegments: 2, curveSegments: 24 });
    geo.center();
    return new THREE.Mesh(geo, mat || galvMat());
  }

  function gridHoles(w, h, cols, rows, r) {
    const arr = [];
    const mx = w * 0.32, my = h * 0.32;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = cols === 1 ? 0 : -mx + (2 * mx) * (i / (cols - 1));
        const y = rows === 1 ? 0 : -my + (2 * my) * (j / (rows - 1));
        arr.push({ x, y, r });
      }
    }
    return arr;
  }

  function addTeeth(parent, len, count, along) {
    // pequeños dientes (antideslizamiento) a lo largo de una arista
    for (let i = 0; i < count; i++) {
      const tGeo = new THREE.BoxGeometry(len / count * 0.6, 0.12, 0.9);
      const tooth = new THREE.Mesh(tGeo, darkMat());
      const p = -len / 2 + (len / count) * (i + 0.5);
      if (along === 'x') tooth.position.set(p, 0, 0);
      parent.add(tooth);
    }
  }

  function buildShape(shape) {
    const g = new THREE.Group();

    switch (shape) {
      case 'escuadra':
      case 'bracket':
      case 'bracket_coliso':
      case 'escuadra_cartela': {
        const wing1 = makePlate(3, 2.4, 0.3, gridHoles(3, 2.4, 2, 2, 0.28));
        wing1.rotation.x = Math.PI / 2;
        wing1.position.set(0, 0, 1.2);
        const wing2 = makePlate(3, 2.4, 0.3, gridHoles(3, 2.4, 2, 2, 0.28));
        wing2.position.set(0, 1.2, 0);
        g.add(wing1, wing2);
        if (shape === 'bracket' || shape === 'bracket_coliso' || shape === 'escuadra_cartela') {
          const gusset = makePlate(2.2, 2.2, 0.25, []);
          gusset.rotation.y = Math.PI / 2;
          gusset.position.set(0, 0.05, 0.05);
          gusset.scale.set(0.9, 0.9, 1);
          g.add(gusset);
        }
        break;
      }
      case 'escuadra_dentada': {
        const wing1 = makePlate(3.2, 2.6, 0.3, gridHoles(3.2, 2.6, 2, 2, 0.26));
        wing1.rotation.x = Math.PI / 2;
        wing1.position.set(0, 0, 1.3);
        const wing2 = makePlate(3.2, 2.6, 0.3, gridHoles(3.2, 2.6, 2, 2, 0.26));
        wing2.position.set(0, 1.3, 0);
        // dientes sobre el ala horizontal
        const teeth = new THREE.Group();
        addTeeth(teeth, 3.0, 9, 'x');
        teeth.position.set(0, 0.17, 1.3);
        g.add(wing1, wing2, teeth);
        break;
      }
      case 'placa': {
        g.add(makePlate(3.4, 3.4, 0.35, gridHoles(3.4, 3.4, 2, 2, 0.3)));
        break;
      }
      case 'placa_rig': {
        const plate = makePlate(3.4, 3.4, 0.35, gridHoles(3.4, 3.4, 2, 2, 0.3));
        g.add(plate);
        // cartelas triangulares
        for (let s = -1; s <= 1; s += 2) {
          const tri = new THREE.Shape();
          tri.moveTo(0, 0); tri.lineTo(1.3, 0); tri.lineTo(0, 1.6); tri.lineTo(0, 0);
          const geo = new THREE.ExtrudeGeometry(tri, { depth: 0.25, bevelEnabled: false });
          const rig = new THREE.Mesh(geo, darkMat());
          rig.rotation.y = Math.PI / 2;
          rig.position.set(s * 0.12, 0.17, -0.6);
          g.add(rig);
        }
        break;
      }
      case 'placa_pernos': {
        const plate = makePlate(3.4, 3.4, 0.35, []);
        g.add(plate);
        const pos = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
        pos.forEach(p => {
          const stud = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.2, 20), galvMat());
          stud.position.set(p[0], -1.2, p[1]);
          const head = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.25, 6), darkMat());
          head.position.set(p[0], -2.25, p[1]);
          g.add(stud, head);
        });
        break;
      }
      case 'channel': {
        // perfil en C (guía 40/22) a lo largo del eje X
        const len = 5;
        const base = new THREE.Mesh(new THREE.BoxGeometry(len, 0.25, 2), galvMat());
        base.position.y = -0.9;
        const wallA = new THREE.Mesh(new THREE.BoxGeometry(len, 1.8, 0.25), galvMat());
        wallA.position.set(0, 0, 0.9);
        const wallB = wallA.clone(); wallB.position.z = -0.9;
        const lipA = new THREE.Mesh(new THREE.BoxGeometry(len, 0.25, 0.5), galvMat());
        lipA.position.set(0, 0.9, 0.65);
        const lipB = lipA.clone(); lipB.position.z = -0.65;
        g.add(base, wallA, wallB, lipA, lipB);
        break;
      }
      case 'bolt': {
        const head = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 0.9), darkMat());
        head.position.y = 1.9;
        const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 3.4, 24), galvMat());
        // rosca simulada con toros
        g.add(head, shank);
        for (let i = 0; i < 10; i++) {
          const th = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.06, 8, 24), galvMat());
          th.rotation.x = Math.PI / 2;
          th.position.y = -1.4 + i * 0.28;
          g.add(th);
        }
        const nut = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.5, 6), darkMat());
        nut.position.y = 0.2;
        g.add(nut);
        break;
      }
      case 'anclaje': {
        // caja tipo anclaje con ranura (como las piezas cuadradas del vídeo)
        const box = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.6, 2.4), galvMat());
        g.add(box);
        // ranura frontal
        const slot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 2.5), holeMat());
        slot.position.set(0, 0.2, 0);
        g.add(slot);
        // pletina superior con taladro
        const top = makePlate(2.4, 1.2, 0.3, [{ x: 0, y: 0, r: 0.35 }]);
        top.rotation.x = Math.PI / 2;
        top.position.set(0, 1.5, 0.6);
        g.add(top);
        break;
      }
      case 'abrazadera': {
        // abrazadera en U que ciñe un ala
        const shape = new THREE.Shape();
        const o = 1.6, t = 0.35, inh = 2.4;
        shape.moveTo(-o, -inh / 2);
        shape.lineTo(o, -inh / 2);
        shape.lineTo(o, inh / 2);
        shape.lineTo(o - t, inh / 2);
        shape.lineTo(o - t, -inh / 2 + t);
        shape.lineTo(-o + t, -inh / 2 + t);
        shape.lineTo(-o + t, inh / 2);
        shape.lineTo(-o, inh / 2);
        shape.lineTo(-o, -inh / 2);
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 1 });
        geo.center();
        g.add(new THREE.Mesh(geo, galvMat()));
        break;
      }
      case 'canalon': {
        // canal en U (soporte de canalón)
        const shape = new THREE.Shape();
        const w = 2.2, h = 1.8, t = 0.28;
        shape.moveTo(-w, -h); shape.lineTo(w, -h); shape.lineTo(w, h);
        shape.lineTo(w - t, h); shape.lineTo(w - t, -h + t);
        shape.lineTo(-w + t, -h + t); shape.lineTo(-w + t, h);
        shape.lineTo(-w, h); shape.lineTo(-w, -h);
        const geo = new THREE.ExtrudeGeometry(shape, { depth: 2.4, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 1 });
        geo.center();
        g.add(new THREE.Mesh(geo, galvMat()));
        // soporte trasero
        const back = makePlate(1.6, 2.2, 0.28, [{ x: 0, y: 0.6, r: 0.28 }, { x: 0, y: -0.6, r: 0.28 }]);
        back.position.set(0, 0, -1.4);
        g.add(back);
        break;
      }
      case 'argolla': {
        const plate = makePlate(2.6, 2.2, 0.3, gridHoles(2.6, 2.2, 2, 1, 0.28));
        plate.position.y = -1.4;
        g.add(plate);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.24, 20, 40), galvMat());
        ring.position.y = 0.1;
        g.add(ring);
        const stemL = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.2, 16), galvMat());
        stemL.position.set(-0.5, -0.9, 0);
        const stemR = stemL.clone(); stemR.position.x = 0.5;
        g.add(stemL, stemR);
        break;
      }
      case 'bayoneta':
      case 'bayoneta_fresada': {
        // Pletina plegada 35x8, extremos con taladros
        const bar1 = makePlate(3.8, 0.7, 0.2, [{x:-1.5,y:0,r:0.14},{x:1.5,y:0,r:0.14}]);
        bar1.position.set(0, 0.8, 0);
        const bar2 = makePlate(2.6, 0.7, 0.2, [{x:0.8,y:0,r:0.14}]);
        bar2.rotation.z = Math.PI / 2.4;
        bar2.position.set(1.5, 0.2, 0);
        g.add(bar1, bar2);
        if (shape === 'bayoneta_fresada') {
          const teeth = new THREE.Group();
          addTeeth(teeth, 3.6, 12, 'x');
          teeth.position.set(0, 0.68, 0.1);
          g.add(teeth);
        }
        break;
      }
      case 'arandela': {
        // arandela dentada con agujero central
        const geo = new THREE.RingGeometry(0.4, 1.1, 40);
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.25, 40), galvMat());
        const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.4, 24), new THREE.MeshBasicMaterial({color:0x000000}));
        disc.rotation.x = 0;
        g.add(disc);
        // dentado radial
        for (let i = 0; i < 16; i++) {
          const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.35), galvMat());
          const a = (i / 16) * Math.PI * 2;
          tooth.position.set(Math.cos(a) * 0.95, 0.16, Math.sin(a) * 0.95);
          tooth.rotation.y = -a;
          g.add(tooth);
        }
        void geo; void hole;
        break;
      }
      case 'u_correa': {
        // Pieza en U
        const base = makePlate(3.6, 0.9, 0.22, [{x:0,y:0,r:0.16}]);
        base.position.set(0, 0, 0);
        const side1 = makePlate(1.8, 0.9, 0.22, [{x:-0.4,y:0,r:0.14}]);
        side1.rotation.x = Math.PI / 2;
        side1.position.set(-1.8, 0.9, 0);
        const side2 = side1.clone();
        side2.position.set(1.8, 0.9, 0);
        g.add(base, side1, side2);
        break;
      }
      case 'z_piece': {
        // Pieza en Z (dos alas paralelas invertidas)
        const a1 = makePlate(2.4, 1.2, 0.22, [{x:-0.6,y:0,r:0.15}]);
        a1.position.set(-1.2, 0.4, 0);
        const web = makePlate(2.4, 1.2, 0.22, []);
        web.rotation.x = Math.PI / 2;
        web.position.set(0, 0, 0);
        const a2 = makePlate(2.4, 1.2, 0.22, [{x:0.6,y:0,r:0.15}]);
        a2.position.set(1.2, -0.4, 0);
        g.add(a1, web, a2);
        break;
      }
      case 's_piece': {
        // Pieza en S (tres tramos plegados)
        const t1 = makePlate(2.2, 1.0, 0.22, [{x:-0.5,y:0,r:0.14}]);
        t1.position.set(-1.3, 0.9, 0);
        const t2 = makePlate(1.6, 1.0, 0.22, []);
        t2.rotation.z = -Math.PI / 2.5;
        t2.position.set(0, 0.3, 0);
        const t3 = makePlate(2.2, 1.0, 0.22, [{x:0.5,y:0,r:0.14}]);
        t3.position.set(1.3, -0.5, 0);
        g.add(t1, t2, t3);
        break;
      }
      case 'tube':
      default: {
        // vaina / tubo corrugado
        const len = 4.2, r = 1.1;
        const rings = 26;
        for (let i = 0; i < rings; i++) {
          const rr = new THREE.Mesh(new THREE.TorusGeometry(r, 0.14, 12, 40), galvMat());
          rr.rotation.y = Math.PI / 2;
          rr.position.x = -len / 2 + (len / (rings - 1)) * i;
          g.add(rr);
        }
        const core = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.06, r - 0.06, len, 40), galvMat());
        core.rotation.z = Math.PI / 2;
        g.add(core);
        break;
      }
    }

    // centrar y escalar el grupo para encajar en cámara
    const bbox = new THREE.Box3().setFromObject(g);
    const center = bbox.getCenter(new THREE.Vector3());
    g.position.sub(center);
    const wrap = new THREE.Group();
    wrap.add(g);
    const size = bbox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const s = 4.4 / maxDim;
    wrap.scale.setScalar(s);
    return wrap;
  }

  function init(canvasEl) {
    canvas = canvasEl;
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    resizeRenderer();
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.set(5.5, 4, 7);

    // entorno para reflejos metálicos
    try {
      const pmrem = new THREE.PMREMGenerator(renderer);
      const roomEnv = new THREE.RoomEnvironment();
      scene.environment = pmrem.fromScene(roomEnv, 0.04).texture;
    } catch (e) { /* fallback a luces */ }

    const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(6, 10, 6); scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(-6, 4, -4); scene.add(fill);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 0.6));

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 13;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.6;

    window.addEventListener('resize', resizeRenderer);
    animate();
  }

  function resizeRenderer() {
    if (!canvas) return;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    if (camera) { camera.aspect = w / h; camera.updateProjectionMatrix(); }
  }

  function load(shape) {
    if (group) { scene.remove(group); }
    group = buildShape(shape);
    scene.add(group);
    if (controls) { controls.reset(); camera.position.set(5.5, 4, 7); }
  }

  function animate() {
    raf = requestAnimationFrame(animate);
    if (controls) controls.update();
    renderer.render(scene, camera);
  }

  function setAutoRotate(v) { autoRotate = v; if (controls) controls.autoRotate = v; }
  function resetView() { if (controls) { controls.reset(); camera.position.set(5.5, 4, 7); } }

  return { init, load, setAutoRotate, resetView, resize: resizeRenderer };
})();
