import React, { useState, useEffect } from 'react';
import BaseService from '../src/services/api';

const ProductContext = React.createContext();

function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState({});
    const [cart, setCart] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const optionDefault = { text: "Selecione uma categoria", value: 0 };
    const [productList, setProductList] = useState([]);

    const [page] = useState(1);

    useEffect(() => {
        let path = `/produtos?page=${page}`;
        BaseService.getProducts(path)
            .then(res => setProducts(res.data.docs))
            .catch(error => console.log(error))
    }, [page]);

    useEffect(() => {
        setProductList(products);
    }, [products]);

    let filter = (atribute, value) => {
        if (value === optionDefault.value || value === "TODOS OS PRODUTOS") {
            setProductList(products);
        } else {
            let listFilter = products.filter(prod => prod.tipoDoProduto.toUpperCase() === value);
            setProductList(listFilter);
        }
    }

    function getItem(id) {
        return products.find(item => item._id === id);
    }

    function handleDetails(id) {
        const product = getItem(id);
        setDetailProduct(product);
    }

    function addToCart(id) {
        let tempProductList = [...productList];
        const index = tempProductList.findIndex(item => item._id === id);
        const product = tempProductList[index];
        
        product.inCart = true;
        product.count = 1;
        product.total = product.preco;

        setProductList(tempProductList);
        setCart([...cart, product]);
    }

    function increment(id) {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1
        product.total = product.count * product.preco;

        setCart([...tempCart])
    }

    function decrement(id) {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item._id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        if (product.count >= 2) {
            product.count = product.count - 1;
            product.total = product.count * product.preco;
            setCart([...tempCart])
        }
    }

    function removeItem(id) {
        let tempCart = cart.filter(item => item._id !== id);
        let tempProductList = products.map(product => {
            if (product._id === id) {
                return {
                    ...product,
                    inCart: false,
                    total: 0,
                    count: 0
                };
            }
            return product;
        });

        setCart(tempCart);
        setProducts(tempProductList);
    }

    useEffect(() => {
        let subTotal = 0;
        cart.forEach(item => (subTotal += item.total));
        setCartSubTotal(subTotal);
    }, [cart]);

    return (
        <ProductContext.Provider value={{
            productList,
            detailProduct,
            cart,
            cartSubTotal,
            handleDetails,
            addToCart,
            increment,
            decrement,
            removeItem,
            filter,
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
