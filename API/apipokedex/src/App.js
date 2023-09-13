// App.js
import React from 'react';
import './App.css';
import CurrentPage from './components/CurrentPage';
import PokeListPage from './components/PokeListPage';

class App extends React.Component {
  state = {
    currentPage: "CurrentPage"
  }

  onChangePage = () => {
    if (this.state.currentPage === "CurrentPage") {
      this.setState({ currentPage: "PokeListPage" })
    } else {
      this.setState({ currentPage: "CurrentPage" })
    }
  }

  render() {
    const pokePage = this.state.currentPage === "CurrentPage" ? (<CurrentPage />) : (<PokeListPage />)

    const buttonName = this.state.currentPage === "CurrentPage" ? "Vá para Lista Pokedex" : "Página atual";

    return (
      
        <div>
          <button onClick={this.onChangePage}> {buttonName}</button>
          {pokePage}
        </div>
     
    );
  }
}

export default App;
