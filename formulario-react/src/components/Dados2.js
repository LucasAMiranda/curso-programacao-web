import React from "react";
import styled from "styled-components";

const FormInputs = styled.form`
    display: flex;
    flex-flow: column-wrap;
    align-items: center;
    justify-content: center;
`;
const MinhaLabel = styled.label`
    margin: 8px;
    align-items: center;
`;


class Dados2 extends React.Component{
    render(){
        return(
            <FormInputs>
                <h3>Dados2 - Informações Do Ensino Superior </h3>
                <MinhaLabel>
                    5. Qual o curso ?
                    <input type="text" name="nome-do-curso" />
                </MinhaLabel>
                <MinhaLabel>
                    6 . Qual a Unidade de Ensino ? 
                    <input type="text" name="nome-da-unidade" />
                </MinhaLabel>
            </FormInputs>
        )
    }
}

export default Dados2;
