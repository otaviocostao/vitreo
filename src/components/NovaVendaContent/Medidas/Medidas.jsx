import React from 'react'
import './Medidas.css'
const Medidas = () => {
  return (
    <div className='medidas-area'>
      <table>
            <thead>
            <tr className='receituario-row'>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr className='receituario-row'>
                <td className='label-olho'>COD:</td>
                <td><input type="text" className='input-medidas' id='co_od' /></td>
                <td className='label-olho'>COE:</td>
                <td><input type="text" className='input-medidas' id='co_oe' /></td>
            </tr>
            <tr className='receituario-row'>
                <td className='label-olho'>DNPD:</td>
                <td><input type="text" className='input-medidas' id='dnp_od' /></td>
                <td className='label-olho'>DNPE:</td>
                <td><input type="text" className='input-medidas' id='dnp_oe' /></td>
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default Medidas
