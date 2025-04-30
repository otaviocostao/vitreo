import React from 'react'
import './ClienteArea.css'
import { useNavigate } from 'react-router-dom';
const ClienteArea = () => {
    
    const navigate = useNavigate(); // Hook para navegação

  const handleCadastrarCliente = () => {
    navigate('/clientes/novo'); // Navega para a página de cadastro
  };

  return (
    <div className='cliente-area'>
      <h2 className='card-title'>Cliente</h2>
      <div className='area-input-cliente'>
        <input
            type="search"
            placeholder="Buscar por nome ou CPF..."
            className="search-input"
          />
          <button className="add-button" onClick={handleCadastrarCliente}>
            + Cadastrar
          </button>
      </div>
    </div>
  )
}

export default ClienteArea
