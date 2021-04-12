import logo from '../../images/logo_with_outline.png';
import triangle from '../../images/logo_triangle.png';

function Logo() {
  return (
    <div className="logo-container">
      <img src={triangle} alt="triangle" className="triangle rotation" />
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default Logo;