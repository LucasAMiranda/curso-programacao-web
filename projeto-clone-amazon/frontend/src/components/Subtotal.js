import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import "./Subtotal.css";

function Subtotal() {
  const basket  = useStateValue(); // Desestruture o estado da cesta corretamente

  // Chame getBasketTotal para obter o valor correto
  const total = getBasketTotal(basket.basket); // Acesse o estado da cesta corretamente

  return (
      <div className="subtotal">
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          Subtotal ({basket?.length} items): <strong>{value}</strong>
                      </p>
                      <small className="subtotal_gift">
                          <input type="checkbox" /> Este pedido contém um presente
                      </small>
                  </>
              )}
              decimalScale={2}
              value={total}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
          />

          <span>
              <button>Proceed to Checkout</button>
          </span>
      </div>
  );
}

export default Subtotal;
