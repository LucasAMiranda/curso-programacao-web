import './App.css';
import Home from './components/Home';

const apiKey = '6094fa19e8280ae04bdc5adc60fc1701';

function App() {
  return (
    <div className='App'>
       <Home apiKey={apiKey} />
    </div>
  );
}

export default App;
