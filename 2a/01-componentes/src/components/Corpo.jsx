import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import TituloDois from './TituloDois'
import TituloUm from './TituloUm'

function Corpo() {
  return (
    <div className='corpo-container'>
      <TituloUm />
      <TituloDois texto={"Primeiro Pedaço da Página"} emoji={"👌"}/>
      <Texto />
      <TituloDois texto={"Segundo Pedaço da Página"}/>
      <Textao />
    </div>
  )
}

export default Corpo