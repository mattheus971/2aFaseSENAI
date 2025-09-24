import './BotaoPadrao.css'

function BotaoPadrao(props) {

 

  return (
    <button className="botao-padrao" onClick={props.funcao}>{props.texto}</button>
  )
}

export default BotaoPadrao