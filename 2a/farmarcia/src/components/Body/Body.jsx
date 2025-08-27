import Introducao from '../Introducao/Introducao'
import LogoCompleta from '../LogoCompleta/LogoCompleta'
import Titulo from '../Titulo/Titulo'
import './Body.css'

function Body() {
  return (
    <div className='container-body'>
        <Titulo texto={'Seja bem-vindo à'}/>
        <LogoCompleta />
        <Introducao />

    </div>
  )
}

export default Body