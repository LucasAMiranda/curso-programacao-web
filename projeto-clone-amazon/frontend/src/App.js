import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Importe o 'Routes'

function App() {
  return (
    <Router>
      <div className="App">
         <Header />
         <Routes> {/* Envolve todas as rotas com <Routes> */}
           <Route path='/' element={<Home />} />
         </Routes>
      </div>
    </Router>
  );
}

export default App;
