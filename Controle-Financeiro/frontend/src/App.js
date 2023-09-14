import Header from './components/Header';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
/*import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';*/
import './App.css';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  //Função para adicionar uma nova transação a Lista 
  const addTransaction = (transaction) =>{
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className='App'>
        <Header />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
  );
}

export default App;
