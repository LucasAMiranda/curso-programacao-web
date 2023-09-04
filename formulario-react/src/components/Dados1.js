import React from "react";
import styled from "styled-components";
import '../App.css';

const FormInputs = styled.form`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const MinhaLabel = styled.label`
    margin: 16px;
    align-items: center;
`;

class Dados1 extends React.Component {
    render() {
        return (
            <FormInputs className="FormInputs">
                <MinhaLabel className="MinhaLabel">
                    <h3>Dados Gerais</h3>
                    <p>1.Name</p>
                    <input type="text" />
                </MinhaLabel >
                <MinhaLabel className="MinhaLabel">
                    <p>2. Qual sua idade ? </p>
                    <input type="text" />
                </MinhaLabel>
                <MinhaLabel  className="MinhaLabel">
                    <p>3. Qual seu E-mail ?</p>
                    <input type="email" />
                </MinhaLabel>
                <MinhaLabel  className="MinhaLabel">
                    <p>4. Qual sua escolaridade ?</p>
                    <select>
                        <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                        <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                        <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                    </select>
                </MinhaLabel>
            </FormInputs>
        );
    }
}

export default Dados1;
