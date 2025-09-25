import { useState } from 'react'
import './ConverterMoedas.css'

function ConverterMoedas() {
    const [valorReal, setValoreReal] = useState('')
    const [moedaEscolhida, setMoedaEscolhida] = useState('')
    const [resultado, setResultado] = useState('')


    function converter() {
        let dolar = 0.19
        let euro = 0.16

        let resultadoConversao;

        if (moedaEscolhida == 'Dolar') {
            resultadoConversao = valorReal * dolar + ' Dolares'
        } else if (moedaEscolhida == 'Euro') {
            resultadoConversao = valorReal * euro + ' Euros'

        } else {
            resultadoConversao = 'Selecione uma moeda'
        }

        setResultado(resultadoConversao)

    }

    return (
        <div className='container-conversor-moedas'>

            <label>Escolha a moeda:</label>
            <select
                id="moeda-escolhida"
                value={moedaEscolhida}
                onChange={(e) => setMoedaEscolhida(e.target.value)}
            >
                <option>Dolar</option>
                <option>Euro</option>
            </select>

            <label>Digite o valor em real:</label>
            <input type="number"
                onChange={(e) => setValoreReal(e.target.value)}
            />

            <button onClick={converter}>Converter</button>
            {resultado}

        </div>
    )
}

export default ConverterMoedas