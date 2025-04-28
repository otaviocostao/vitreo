import React from 'react';
import './NovaVenda.css'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import NovaVendaContent from '../../components/NovaVendaContent/NovaVendaContent';

function NovaVenda() {

  return (
    <div className='page-area'>
      <Header />
      <div className='page-container'>
        <Sidebar />
        <NovaVendaContent />
      </div>
    </div>
  )
}

export default NovaVenda;