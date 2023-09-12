// StateProvider.js
import React, { createContext, useContext, useReducer } from "react";

// Crie um contexto para o seu estado
export const StateContext = createContext();

// Estado inicial e função redutora
export const initialState = {
  basket: [],
  // outros estados, se necessário
};

const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  // outros tipos de ação, se necessário
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
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
export const StateProvider = ({ children, reducer }) => { // Adicione o argumento 'reducer'
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Gancho personalizado para acessar o estado
export const useStateValue = () => useContext(StateContext);
