import Header from './components/Header';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  //Função para adicionar uma nova transação a Lista 
  const addTransaction = (transaction) =>{
    setTransactions([...transactions, transaction]);
  };
  
  return (
    <Router>
    <div className="container">
       <h1>Minhas Transações</h1>
       <ul>
        <li>
          <Link to="/transactions"> Lista de Transações </Link>
        </li>
        <li>
          <Link to="/add-transaction">Adicionar Transação</Link>
        </li>
       </ul>

       <Header />
       <Routes>
         <Route
            path="/transactions"
            element={<TransactionList transactions={transactions} />}
          />
          <Route
            path="/add-transaction"
            element={<TransactionForm addTransaction={addTransaction} />}
          />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
