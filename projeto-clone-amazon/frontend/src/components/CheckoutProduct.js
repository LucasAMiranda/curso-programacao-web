import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function checkoutProduct({id, image, title, price, rating}){

    const  {dispatch} = useStateValue;

    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="checkout_Product"/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <StarIcon className="star-icon" />
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remover do Carrinho</button>
            </div>
        </div>
    )
}

export default checkoutProduct;