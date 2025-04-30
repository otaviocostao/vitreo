import React from 'react'
import "./Receituario.css"
const Receituario = () => {
  return (
    <div className='receituario-content'>
        <h2 className='card-title'>Receita</h2>
        <table>
            <thead>
            <tr className='receituario-row'>
                <th></th>
                <th>ESF</th>
                <th>CIL</th>
                <th>EIXO</th>    
            </tr>
            </thead>
            <tbody>
            <tr className='receituario-row'>
                <td className='label-olho'>OD:</td>
                <td><input type="text" className='input-receituario' id='esf_od' /></td>
                <td><input type="text" className='input-receituario' id='cil_od' /></td>
                <td><input type="text" className='input-receituario' id='eixo_od' /></td>
            </tr>
            <tr className='receituario-row'>
                <td className='label-olho'>OE:</td>
                <td><input type="text" className='input-receituario' id='esf_oe' /></td>
                <td><input type="text" className='input-receituario' id='cil_oe' /></td>
                <td><input type="text" className='input-receituario' id='eixo_oe' /></td>
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
