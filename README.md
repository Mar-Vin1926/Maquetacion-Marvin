# Maquetación con React y Vite

Este proyecto es una maquetación creada con React y Vite, que muestra una serie de cuadros de colores dispuestos en una estructura específica.

## Estructura del proyecto

La estructura del proyecto es la siguiente:
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   ├── ColorBox/
│   │   └── ColorBox.jsx
├── App.jsx
├── main.jsx
├── index.css

* `components/Layout/Layout.jsx`: Contiene el componente principal que organiza los cuadros de colores.
* `components/Layout/Layout.css`: Contiene los estilos CSS para la maquetación.
* `components/ColorBox/ColorBox.jsx`: Componente genérico para crear cuadros de colores.
* `App.jsx`: Componente principal de la aplicación.
* `main.jsx`: Punto de entrada de la aplicación.
* `index.css`: Estilos globales.

## Cómo ejecutar el proyecto

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/Mar-Vin1926/Maquetacion-Marvin.git
    ```

2.  Navega a la carpeta del proyecto:

    ```bash
    cd maquetacion-colores
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

4.  Ejecuta la aplicación:

    ```bash
    npm run dev
    ```

5.  Abre el navegador en `http://localhost:5173/`.

## Ajustes

* Para ajustar el margen entre los cuadros, modifica la propiedad `margin` en el selector `.color-box` en `src/components/Layout/Layout.css`.
* Para ajustar los colores o tamaños de los cuadros, modifica los estilos correspondientes en `src/components/Layout/Layout.css`.
* Para que la maquetación ocupe toda la pantalla, se usan unidades relativas y se ajusta la lógica de los tamaños en el archivo `src/components/Layout/Layout.css`.

## Autor

* [Marvin Garcia]
