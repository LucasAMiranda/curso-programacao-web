import React from "react";

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2>Carrinho de Compras</h2>
            {cartItems.length === 0 ? (
                <p>O carrinho está vazio </p>
            ): (

            <div>
                <ul>
                    {cartItems.map(item => 
                       <li key={item.id}>
                           {item.name} - {item.price}
                       </li>
                    )}
                </ul>
                <p>
                    Total: R$ {cartItems.reduce((total, item ) => total + item.price, 0)}
                </p>
                <button>Finalizar Compra</button>
            </div>
        )}
     
      </div>
    );
};

export default Cart;