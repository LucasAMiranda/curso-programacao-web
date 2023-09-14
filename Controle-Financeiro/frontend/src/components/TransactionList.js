import React from "react";

const TransactionList= ({transactions}) => {
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
    )
}
export default TransactionList;