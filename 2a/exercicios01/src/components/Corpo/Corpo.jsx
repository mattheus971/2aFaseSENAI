import ConverterMoedas from '../ConverterMoedas/ConverterMoedas'
import EscolherTamanhoPizza from '../EscolherTamanhoPizza/EscolherTamanhoPizza'
import SugerirRoupas from '../SugerirRoupas/SugerirRoupas'
import './Corpo.css'

function Corpo() {
  return (
    <div className='container-corpo'>
        <EscolherTamanhoPizza />
        <ConverterMoedas />
        <SugerirRoupas />

    </div>
  )
}

export default Corpo