import Paragrafo from '../Paragrafo/Paragrafo'
import Subtitle from '../Subtitle/Subtitle'
import './Introducao.css'



function Introducao() {
  return (
    <div className='container-introducao'>
        <div className='titulo-subtitulo'>
        <Subtitle texto={'Uma nova fase começa, e ela começa com você.'}/>
        <Paragrafo texto={'Sob nova direção, a farmácia do seu bairro está de cara nova — com um atendimento mais próximo, estrutura reformada e tudo o que você precisa para cuidar da sua saúde.'}/>
        </div>
        <img src="src\assets\farmarcia-placa.PNG.png" alt="" className='imagem-placa'/>
    </div>
  )
}

export default Introducao