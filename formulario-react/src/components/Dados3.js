import React from "react";
import styled from "styled-components";


const FormInputs = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
`;

const MinhaLabel = styled.label `
    margin: 16px;
    align-self: center;
`;

class Dados3 extends React.Component{
    render(){
        return(
            <FormInputs>
                <MinhaLabel>
                    <h3>7. Porque você não terminou o seu curso de Graduação? </h3>
                    <textarea></textarea>
                </MinhaLabel>

                <MinhaLabel>
                    <h3>8. Você fez Algum Curso Complementar ? </h3>
                    <select>
                      <option>Nenhum</option>
                      <option>Curso de Informática Básica</option>
                      <option>Curso de Inglês</option>
                      <option>Curso Profissionalizante</option>
                    </select>
                </MinhaLabel>
            </FormInputs>
        );
    }
}

export default Dados3;