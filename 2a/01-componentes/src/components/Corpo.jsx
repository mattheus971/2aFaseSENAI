import './Corpo.css'
import Textao from './Textao'
import Texto from './Texto'
import TituloDois from './TituloDois'
import TituloUm from './TituloUm'

function Corpo() {

  function logar() {
    let usuario = prompt("Digite seu usuário: ")

    if (usuario == 'adm123') {
      alert("Usuário logado com sucesso!")
    } else {
      alert("Errou, o usuário era adm123")
    }
  }

  return (
    <div className='corpo-container'>
      <TituloUm />
      <TituloDois texto={"Primeiro Pedaço da Página"} emoji={"👌"} />
      <Texto texto={"Texto enviado para o componente via prop."} />
      <TituloDois texto={"Segundo Pedaço da Página"} />
      <Textao texto={"Textão enviado para o componente via prop."} />
      <img src="public\imagens\react-native-logo.png" alt="" className='imagem-corpo' />
      <button onClick={logar}>Logar</button>
    </div>
  )
}

export default Corpo