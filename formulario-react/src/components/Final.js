import React from "react";
import styled from "styled-components";

const FormFinal = styled.form`
    margin: 0 auto;
    display: block;
    align-items: center;
    justify-content: space-evenly;
`;

class Final extends React.Component{
    render(){
        return(
            <FormFinal>
                <h3>O Formulário Acabou...</h3>    
                <p>Muito obrigado por participar! Entraremos em Contato em Breve</p>
            </FormFinal>
        );
    }
}
export default Final;