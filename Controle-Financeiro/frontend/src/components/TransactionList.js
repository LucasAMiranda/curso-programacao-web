import React, { useState, useEffect } from "react";
import { fetchTransactions } from "../api";

const TransactionList= ({transactions: propTransactions}) => {
    const [transactions, setTransactions] = useState([]);

    //Criar uma função para carregar as transações
    const loadTransactions = async () =>{
        try{
            const data = await fetchTransactions();
            setTransactions(data);
        }catch(error){
            console.log("Erro ao carregar as transações: ", error)
        }
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    return(
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
                    {propTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default TransactionList;