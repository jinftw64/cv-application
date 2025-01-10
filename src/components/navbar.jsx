import '../App.css'
import NavbarContent from './navbarContent.jsx'
import NavbarCustomize from './navbarCustomize.jsx';

function Navbar() {

  return (
    <div className="navbar">
      <NavbarContent />
      <NavbarCustomize />
    </div>
  )
}

export default Navbar;
