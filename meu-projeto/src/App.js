import { useState } from "react";
import AddressForm from "./components/AddressForm";
import AddressDetail from "./components/AddressDetail";
import {Container, Typography, Paper} from '@mui/material';
import {styled} from '@mui/material/styles';
import './App.css';

const StyledContainer = styled(Container)(({ theme }) =>({
    textAlign: 'center',
    padding: theme.spacing(3)
}));

const StyledPaper = styled(Paper)(( {theme} ) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
}));


const App = () => {

  const [address, setAddress] = useState(null);

  const searchAddress = async (cep) =>{
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data)
    }catch(error){
      console.error('Erro ao buscar endereço: ', error)
    }
  }
  
  return (
    <StyledContainer>
       <StyledPaper elevation={3}>
           <Typography variant="h4" gutterBottom>
              Busca de Endereço
           </Typography>
        
              <AddressForm onSearch={searchAddress} />
         
       </StyledPaper>
       {address && (
          <StyledPaper elevation={3}>
            <AddressDetail address={address} />
          </StyledPaper>
       )}
    </StyledContainer>
   
  );

}

export default App;
