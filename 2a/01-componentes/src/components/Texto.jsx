import './Texto.css'

function Texto(props) {
  return (
    <div className='container-texto'>
      <p>{props.texto} </p>  
    </div>
  )
}

export default Texto