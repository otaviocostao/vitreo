import React from 'react'
import "./Receituario.css"
const Receituario = () => {
  return (
    <div className='receituario-content'>
        <table>
            <thead>
            <tr className='receituario-row'>
                <th>-</th>
                <th>ESF</th>
                <th>CIL</th>
                <th>EIXO</th>
                <th>DNP</th>
            </tr>
            </thead>
            <tbody>
            <tr className='receituario-row'>
                <td className='label-olho'>OD:</td>
                <td><input type="text" className='input-receituario' id='esf_od' /></td>
                <td><input type="text" className='input-receituario' id='cil_od' /></td>
                <td><input type="text" className='input-receituario' id='eixo_od' /></td>
                <td><input type="text" className='input-receituario' id='dnp_od' /></td>
            </tr>
            <tr className='receituario-row'>
                <td className='label-olho'>OE:</td>
                <td><input type="text" className='input-receituario' id='esf_oe' /></td>
                <td><input type="text" className='input-receituario' id='cil_oe' /></td>
                <td><input type="text" className='input-receituario' id='eixo_oe' /></td>
                <td><input type="text" className='input-receituario' id='dnp_oe' /></td>
            </tr>
            <tr className='receituario-row'>
                <td className='label-olho' >AD:</td>
                <td>
                    <input type="text" className='input-receituario' id='adicao' />
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Receituario
