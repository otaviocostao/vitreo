import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'; // 1. Importe NavLink

const Sidebar = () => {
  return (
    <div className='menu-lateral-content'>
      <div className='menu-buttons-area'>
        <div className='area-sidebar-button'>
          <NavLink to="/" className='menu-sidebar-button' end>
            Início
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/vendas/novo" className='menu-sidebar-button'>
            Realizar venda
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/vendas" className='menu-sidebar-button'>
            Suas vendas
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/clientes" className='menu-sidebar-button'>
            Clientes
          </NavLink>
        </div>
        <div className='area-sidebar-button'>
          <NavLink to="/estoque" className='menu-sidebar-button'>
            Estoque
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;