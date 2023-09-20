import React, { useState } from "react";
import axios from "axios";

const TransactionForm = ({addTransaction}) =>{
    //Criar um gerenciamento de estado para controlar os valores do Formulário
    const [ description, setDescription] = useState('');
    const [ amount, setAmount] = useState('');
    const [ showAlert, setShowAlert] = useState(false);

    //Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        //validar os campos
        if (description.trim()==='' || isNaN(Number(amount))){
            setShowAlert(true);
            alert('Por favor, preencha todos os campos corretamente.')
        }else{
            setShowAlert(false);

            //Criar um objeto de transação com os valores do formulário
            const newTransaction = {
                id: Math.random(),
                description,
                amount: Number(amount),
            };

            //Enviar os dados para o servidor 
            axios.post('http://localhost:3000/addTransaction', newTransaction)
            .then((response) => {
                console.log(response.data.message); //Mensagem de sucesso
            })

            addTransaction(newTransaction)
            
            console.log('Nova Transação: ', newTransaction)
            
            //Limpar os campos do Formulário
            setDescription('')
            setAmount('');
        }
    };


    return(
        <div>
            <h2>Adicionar Transação</h2>
            {showAlert && (
                <div className="alert alert-danger">
                    Por favor, Preencha todos os campos corretamente.
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amout">Valor</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary"> Adicionar Transação</button>
            </form>
        </div>
    )
}
export default TransactionForm;