# Plan de Corrección de Despliegue en GitHub Pages

El objetivo es configurar el proyecto para que GitHub Pages sirva la aplicación construida (Build) desde la carpeta `frontend/build` en lugar de mostrar el `README.md` de la raíz o los archivos estáticos de `public`.

## Cambios Propuestos

### Frontend

#### [MODIFY] [package.json](file:///Users/pedrocanovas/Documents/personal/manuel/frontend/package.json)
- Añadir `"homepage": "https://miniestalozano-hub.github.io/pagina-web/"`. Esto es necesario para que `react-router` y los assets carguen correctamente desde el subdirectorio del repositorio.

### GitHub Actions

#### [MODIFY] [deploy-pages.yml](file:///Users/pedrocanovas/Documents/personal/manuel/.github/workflows/deploy-pages.yml)
- Actualizar el workflow para automatizar el proceso de construcción:
    1. Checkout del código.
    2. Configuración de Node.js.
    3. Instalación de dependencias (vía `yarn` ya que el proyecto usa Yarn).
    4. Ejecución del script de construcción (`yarn build`).
    5. Subida del artefacto desde la carpeta `frontend/build`.
    6. Despliegue automático.

## Verificación Planificada

### Verificación Manual
1. Subir los cambios a GitHub.
2. Comprobar en la pestaña **Actions** que el workflow se ejecuta correctamente.
3. Verificar en **Settings > Pages** que la fuente esté configurada como **GitHub Actions**.
4. Acceder a la URL de GitHub Pages y verificar que la web carga con sus estilos e imágenes.
