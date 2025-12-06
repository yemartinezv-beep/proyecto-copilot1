# Arquitectura de Software

Este proyecto es un blog técnico titulado "Arquitectura de Software", creado por Yun Erasmo Martinez. El objetivo de este blog es proporcionar contenido técnico relacionado con la arquitectura de software, utilizando herramientas de desarrollo web como HTML, CSS y JavaScript. 

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **index.html**: Archivo principal que sirve como punto de entrada para el blog. Incluye enlaces a los archivos CSS y JavaScript, y proporciona la estructura para la página de inicio.
  
- **posts/**: Carpeta que contiene las publicaciones del blog.
  - **01-que-es-arquitectura-de-software.html**: Primer post que detalla la definición de la arquitectura de software, sus objetivos, componentes, importancia, roles de un arquitecto de software y ejemplos.
  - **02-estilos-arquitectonicos-mas-utilizados.html**: Segundo post que discute varios estilos arquitectónicos, incluyendo monolítico, en capas, cliente-servidor, MVC y microservicios, junto con sus características, ventajas, desventajas y una comparación.
  - **03-patrones-arquitectonicos-modernos.html**: Tercer post que cubre patrones arquitectónicos modernos como Clean Architecture, Arquitectura Hexagonal y CQRS, incluyendo sus capas, propósitos, ventajas, desventajas y ejemplos.

- **css/style.css**: Archivo que contiene los estilos CSS para el blog, diseñado para crear una interfaz ejecutiva con colores vibrantes que no son claros.

- **js/main.js**: Archivo que contiene el código JavaScript para cualquier característica interactiva del blog, como navegación o carga dinámica de contenido.

- **assets/**: Carpeta que contiene recursos adicionales.
  - **fonts/**: Carpeta que contiene archivos de fuentes utilizados en el blog para mejorar la tipografía.
  - **data/**: Carpeta que contiene el archivo **posts.json**, que puede contener metadatos o contenido para las publicaciones del blog, permitiendo una gestión más fácil y una posible carga dinámica de publicaciones.

- **.github/workflows/pages.yml**: Archivo de configuración de flujo de trabajo de GitHub Actions para desplegar el proyecto en GitHub Pages.

- **CNAME**: Archivo utilizado para la configuración de dominio personalizado para el sitio de GitHub Pages.

## Instrucciones de Configuración

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para ver la página de inicio del blog.
3. Modifica los archivos en la carpeta `posts/` para agregar o actualizar contenido según sea necesario.
4. Realiza cambios en `css/style.css` para personalizar el estilo del blog.
5. Utiliza `js/main.js` para agregar interactividad al blog.
6. Despliega el proyecto en GitHub Pages siguiendo las instrucciones en el archivo `.github/workflows/pages.yml`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el blog o agregar contenido, siéntete libre de hacer un fork del repositorio y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.