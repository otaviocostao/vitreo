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
        <label>Nome:</label>
      <input
          type="search"
          placeholder="Buscar por nome ou CPF..."
          className="search-input"
        />
        <button className="add-button" onClick={handleCadastrarCliente}>
          + Cadastrar
        </button>
    </div>
  )
}

export default ClienteArea
