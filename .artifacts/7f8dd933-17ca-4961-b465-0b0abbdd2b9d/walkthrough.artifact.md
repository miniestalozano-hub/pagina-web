# Despliegue Automatizado en GitHub Pages

He configurado el proyecto para que se construya y despliegue automáticamente en GitHub Pages cada vez que subas cambios a la rama `main`.

## Cambios Realizados

### Configuración del Proyecto
- **Archivo**: [package.json](file:///Users/pedrocanovas/Documents/personal/manuel/frontend/package.json)
- **Cambio**: Se ha añadido la propiedad `"homepage": "https://miniestalozano-hub.github.io/pagina-web/"`.
- **Razón**: Esto asegura que React cargue los archivos estáticos (JS, CSS, Imágenes) correctamente cuando la web se sirve desde una subcarpeta en GitHub Pages.

### Automatización del Despliegue (CI/CD)
- **Archivo**: [deploy-pages.yml](file:///Users/pedrocanovas/Documents/personal/manuel/.github/workflows/deploy-pages.yml)
- **Cambio**: Se ha actualizado el flujo de trabajo para que realice los siguientes pasos automáticamente:
    1. Instalar dependencias mediante `yarn`.
    2. Construir la versión de producción (`yarn build`).
    3. Desplegar el contenido de `frontend/build` (la versión optimizada).

## Siguientes Pasos (IMPORTANTE)

Para que estos cambios surtan efecto, debes realizar lo siguiente en GitHub:

1. **Subir los cambios**:
   ```bash
   git add .
   git commit -m "Fix: Configurar despliegue automático a GitHub Pages"
   git push origin main
   ```

2. **Cambiar la fuente de despliegue**:
   > [!IMPORTANT]
   > Ve a tu repositorio en GitHub > **Settings** > **Pages**.
   > En **Build and deployment > Source**, selecciona **GitHub Actions** en el menú desplegable.

3. **Verificar el progreso**:
   - Ve a la pestaña **Actions** en tu repositorio para ver el proceso de construcción en tiempo real.
   - Una vez termine, tu web debería estar disponible en: [https://miniestalozano-hub.github.io/pagina-web/](https://miniestalozano-hub.github.io/pagina-web/)
