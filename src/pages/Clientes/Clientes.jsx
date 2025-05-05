import React from 'react';
import './Clientes.css'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

function Clientes() {

  return (
    <div className='clientes-area'>
      <Header />
      <div className='clientes-container'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Clientes;