import React from 'react'
import './Medidas.css'
const Medidas = () => {
  return (
    <div className='medidas-area'>
      <h2 className='card-title'>Medidas</h2>
      <table>
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
            <tr className='receituario-row'>
                <td className='label-olho'>DP:</td>
                <td><input type="text" className='input-medidas' id='dp' /></td>
                <td className='label-olho'>AV:</td>
                <td><input type="text" className='input-medidas' id='av' /></td>
            </tr>
            <tr className='receituario-row'>
                <td className='label-olho'>AM:</td>
                <td><input type="text" className='input-medidas' id='am' /></td>
                <td className='label-olho'>PA:</td>
                <td><input type="text" className='input-medidas' id='pa' /></td>
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default Medidas
