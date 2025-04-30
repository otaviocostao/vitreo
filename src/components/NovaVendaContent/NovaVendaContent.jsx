import React from 'react'
import "./NovaVendaContent.css"
import Receituario from './Receituario/Receituario'
import HeaderPage from '../HeaderPage/HeaderPage'
import ClienteArea from './ClienteArea/ClienteArea'
import Medidas from './Medidas/Medidas'
import OrdemServico from './OrdemServico/OrdemServico'
import InformacoesArea from './InformacoesArea/InformacoesArea'
import Pagamento from './Pagamento/Pagamento'

const NovaVendaContent = () => {
  return (
    <div className='nova-venda-content'>
        <HeaderPage title={"Nova venda"}/>
        <div className='area-cliente-os'>
          <ClienteArea />
          <OrdemServico />
        </div>
        <div className='area-receituario-pagamento'>
          <div className='area-receituario-completo'>
            <div className='area-receituario-medidas'>
                <Receituario />
                <Medidas />
            </div>
            <InformacoesArea />
          </div>
          <Pagamento />
        </div>
    </div>
  )
}

export default NovaVendaContent
