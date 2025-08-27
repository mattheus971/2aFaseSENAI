import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import "./Header.css"

function Header() {
  return (
    <div className="container-header">
      <Logo />
      <Navbar />
      <Logo />
    </div>
  )
}

export default Header