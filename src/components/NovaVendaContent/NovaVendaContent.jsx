import React from 'react'
import "./NovaVendaContent.css"
import Receituario from './Receituario/Receituario'
import HeaderPage from '../HeaderPage/HeaderPage'
import ClienteArea from './ClienteArea/ClienteArea'
import Medidas from './Medidas/Medidas'

const NovaVendaContent = () => {
  return (
    <div className='nova-venda-content'>
        <HeaderPage title={"Nova venda"}/>
        <ClienteArea />
        <div className='area-receituario-medidas'>
            <Receituario />
            <Medidas />
        </div>
    </div>
  )
}

export default NovaVendaContent
