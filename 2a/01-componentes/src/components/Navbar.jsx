import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <a href="">
        <img src="public\imagens\material-symbols--home-rounded.svg" alt="" />Home</a>
      <a href="">
        <img src="public\imagens\teenyicons--contract-solid.svg" alt="" />Contratos</a>
      <a href="">
        <img src="public\imagens\material-symbols--dashboard-rounded.svg" alt="" />Dashboard</a>
    </div>
  )
}

export default Navbar