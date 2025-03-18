import React from 'react';
import ColorBox from '../Colorbox/ColorBox';
import './Layout.css';

function Layout() {
  return (
    <div className="contenedor-principal"> {/* Agregamos el contenedor principal */}
      <div className="layout">
        <div className="top">
          <ColorBox color="naranja">
            <div className="inner-box"></div>
          </ColorBox>
          <ColorBox color="verde" />
        </div>
        <div className="rojo-inferior">
          <ColorBox color="rojo" />
          <ColorBox color="rojo" />
          <ColorBox color="rojo" />
        </div>
      </div>
    </div>
  );
}

export default Layout;