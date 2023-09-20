import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionList = ({transactions}) => {
  const [setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/transactions");
        const formattedTransactions = response.data.map((transaction) => ({
          id: transaction.id,
          description: transaction.description,
          amount: transaction.amount,
        }));
        setTransactions(formattedTransactions);
      } catch (error) {
        console.error("Erro ao buscar transações", error);
      }
    };

    fetchData();
  }, [setTransactions]); // Apenas execute uma vez quando o componente montar


  return (
    <div>
      <h2>Listar Transações</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
