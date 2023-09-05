// StateProvider.js
import React, { createContext, useContext, useReducer } from "react";

// Crie um contexto para o seu estado
export const StateContext = createContext();

// Estado inicial e função redutora
const initialState = {
  basket: [],
  // outros estados, se necessário
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // outros casos para atualizações de estado
    default:
      return state;
  }
};

// Componente StateProvider
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Gancho personalizado para acessar o estado
export const useStateValue = () => useContext(StateContext);
