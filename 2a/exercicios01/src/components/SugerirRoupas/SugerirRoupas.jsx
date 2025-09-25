import './SugerirRoupas.css'

import React, { useState } from 'react'

function SugerirRoupas() {
    const [temperatura, setTemperatura] = useState('')

  return (
    <div className='container-sugerir-roupas'>
        
        <label>Insira a temperatura atual em °C:</label>
        <input type="number" />

        <button>Susgerir</button>

    </div>
  )
}

export default SugerirRoupas