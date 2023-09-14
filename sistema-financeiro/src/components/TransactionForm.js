import React, { useState } from 'react';

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Transação criada com sucesso');
        // Limpar os campos do formulário após o sucesso
        setFormData({
          description: '',
          amount: 0,
        });
      } else {
        console.error('Erro ao criar a transação');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <div>
      <h2>Formulário de Transação</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrição:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description} // Valor do campo description
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Valor:
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount} // Valor do campo amount
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar Transação
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
