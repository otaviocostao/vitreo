import React from 'react'
import "./NovaVendaContent.css"
import Receituario from './Receituario/Receituario'
import HeaderPage from '../HeaderPage/HeaderPage'
import ClienteArea from './ClienteArea/ClienteArea'

const NovaVendaContent = () => {
  return (
    <div className='nova-venda-content'>
        <HeaderPage title={"Nova venda"}/>
        <ClienteArea />
        <Receituario />
    </div>
  )
}

export default NovaVendaContent
