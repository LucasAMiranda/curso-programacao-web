import React from 'react';
import Dados1 from "./components/Dados1";
import Dados2 from "./components/Dados2";
import Dados3 from "./components/Dados3";
import Final from "./components/Final";
import styled from "styled-components";

const ButtonEtapa = styled.button`
    border-radius: 15px;
    margin: 18px;
`;

const DivContainer = styled.div`
    display: flex;
    flex-direction:column;
    height: 100vh;
    align-items: center;
`
class App extends React.Component {

  state = {
    passo: 1,
  }

  renderizarPasso = () =>{
    switch(this.state.passo){
      case 1:
        return <Dados1 />
      case 2:
        return <Dados2 />
      case 3:
        return <Dados3 />
      default:
        return <Final />
    }
  }
  
  irParaProximoPasso = () => {
    this.setState({passo:this.state.passo + 1})
  }

  render(){
    const proximoPasso = this.state.passo !== 4 ? <ButtonEtapa onClick={this.irParaProximoPasso}>Avançar</ButtonEtapa> : <></>

    return (
      <DivContainer>
         {this.renderizarPasso()}
         {proximoPasso}
      </DivContainer>
    )
  }
 
}

export default App;
