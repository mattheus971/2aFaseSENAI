import './Titulo.css'

function Titulo(props) {
  return (
    <h1 className='titulo'>
      {props.texto}
    </h1>
  )
}

export default Titulo