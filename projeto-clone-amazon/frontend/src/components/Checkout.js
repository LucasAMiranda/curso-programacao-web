import React from 'react';
import './Checkout.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
    const { state } = useStateValue(); // Acesse o estado do carrinho de compras

    // Acesse o array do carrinho de compras
    const basket = state.basket;

    // Verifique se o carrinho de compras está vazio
    if (!basket || basket.length === 0) {
        return (
            <div className="checkout">
                <div className="checkout-left">
                    <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Checkout Ad" />

                    <div>
                        <h2 className="checkout-title"><ShoppingCartOutlinedIcon className="checkout-basket-icon" />Your Shopping Cart </h2>
                        <p>Your shopping cart is empty.</p>
                    </div>
                </div>
                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
        );
    }

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Checkout Ad" />

                <div>
                    <h2 className="checkout-title"><ShoppingCartOutlinedIcon className="checkout-basket-icon" />Your Shopping Cart </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            key={item.id}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
