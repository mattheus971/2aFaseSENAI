import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import './EscolherTamanhoPizza.css'
import React, { useState } from 'react';

function EscolherTamanhoPizza() {
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState('');

       function escolherTamanho() {
        const numero = prompt("Escolha o tamanho: \n1: Pizza pequena \n2: Pizza média \n3: Pizza grande");

        if (numero === '1') {
            setTamanhoEscolhido("Pequena");
        } else if (numero === '2') {
            setTamanhoEscolhido("Média");
        } else if (numero === '3') {
            setTamanhoEscolhido("Grande");
        } else {
            setTamanhoEscolhido('');
            alert("Opção inválida");
        }
    }

    

    return (
        <div className='container-escolher-tamanho-pizza'>
            <h4>ESCOLHA O TAMANHO DA PIZZA</h4>
            <BotaoPadrao funcao={escolherTamanho} texto={'ESCOLHER TAMANHO'} />
            {tamanhoEscolhido}
        </div>
    )
}

export default EscolherTamanhoPizza