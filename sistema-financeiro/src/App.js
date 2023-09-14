import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the import order change
import TransactionForm from './components/TransactionForm';
/*import Home from './components/Home';*/

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<TransactionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
