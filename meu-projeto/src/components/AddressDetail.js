import React from "react";

const AddressDetail = ({address}) =>{
    return(
        <div>
            <h2>Detalhes do Endereço</h2>
            <p>CEP: {address.cep}</p>
            <p>Logradouro: {address.logradouro}</p>
            <p>Bairro: {address.bairro}</p>
            <p>Localidade: {address.localidade}</p>
            <p>Estado: {address.uf}</p>
        </div>
    )
}

export default AddressDetail;