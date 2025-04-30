import React from 'react'
import './InformacoesArea.css'

const InformacoesArea = () => {
  return (
    <div className='informacoes-area'>
        <div className='text-area-informacoes'>
            <label>Dr:</label>
            <input type="text" className='input-informacoes' />
        </div>
        <div className='text-area-informacoes'>
            <label>Marca arm:</label>
            <input type="text" className='input-informacoes' />
        </div>
        <div className='text-area-informacoes'>
            <label>Referência arm:</label>
            <input type="text" className='input-informacoes' />
        </div>
        <div className='text-area-informacoes'>
            <label>Lentes:</label>
            <input type="text" className='input-informacoes' />
        </div>
        <div className='text-area-informacoes'>
            <div className='text-area-datas'>
                <label>Pedido:</label>
                <input type="date" className='input-informacoes' />
            </div>
            <div className='text-area-datas'>
                <label>Entrega:</label>
                <input type="date" className='input-informacoes' />
            </div>
        </div>
    </div>
  )
}

export default InformacoesArea