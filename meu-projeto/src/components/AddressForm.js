import React, {useState} from "react";

const AddressForm = ({onSearch}) =>{
    
    const [cep, setCep] = useState('');
    
    const handlerSearch = () => {
        onSearch(cep);
    };

    return(
      <div>
        <input 
         type="text"
         placeholder="Digite o cep"
         value={cep}
         onChange={e => setCep(e.target.value)}
       />

       <button className="searchButton" onClick={handlerSearch}>Pesquisar</button>
       </div>
       
    )
}

export default AddressForm;