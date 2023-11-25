// Componente Logo que renderiza el logo en un componente y puede ser reutilizado en cualquier parte de mi codigo

import logoUTN from '../imagenes/utn.png';

function Logo() {
  return (
    <div className="contenedor-logo">
      <img src={logoUTN} alt="logo" className="logo" />
    </div>
  );
}

export default Logo;
