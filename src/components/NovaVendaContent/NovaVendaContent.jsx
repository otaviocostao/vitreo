import React from 'react'
import "./NovaVendaContent.css"
import Receituario from './Receituario/Receituario'
import HeaderPage from '../HeaderPage/HeaderPage'

const NovaVendaContent = () => {
  return (
    <div className='nova-venda-content'>
        <HeaderPage title={"Nova venda"}/>
      <Receituario />
    </div>
  )
}

export default NovaVendaContent
