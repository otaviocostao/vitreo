import React from 'react'
import './Pagamento.css'

const Pagamento = () => {
  return (
    <div className="pagamento-area">
        <h2 className="card-title">Resumo e Pagamento</h2>
        <div className="sumario-valor">
            <span>Subtotal:</span>
            <strong>R$1.000,00</strong>
        </div>
        <div className="sumario-valor input-row">
            <label htmlFor="discount">Desconto (%):</label>
            <input
                type="number"
                id="discount"
                className="pagamento-input-field small-input"
                min="0"
                step="0.01"
            />
        </div>
        <div className="sumario-valor total-row">
            <span>Total:</span>
            <strong className="total-value">R$ </strong>
        </div>
        <hr className="divider" />
        <div className="sumario-valor input-row">
            <label htmlFor="paymentMethod">Forma de Pagamento:</label>
            <select
                id="paymentMethod"
                className='pagamento-input-field'
            >
                <option value="dinheiro">Dinheiro</option>
                <option value="cartao_debito">Cartão de Débito</option>
                <option value="cartao_credito">Cartão de Crédito</option>
                <option value="pix">PIX</option>
                <option value="convenio">Promissória</option>
            </select>
        </div>
        <div className="sumario-valor input-row">
            <label>Observações:</label>
                <textarea
                    id="notes"
                    className='pagamento-input-field'
                    rows="3"
                    placeholder='Alguma observação sobre a venda?'
            ></textarea>
        </div>
        <div className="actions-footer">
                <button className="button-finalizar">
                    Finalizar Venda
                </button>
            </div>
    </div>
  )
}

export default Pagamento