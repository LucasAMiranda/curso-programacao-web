import React, {useState, useEffect, useContext} from 'react';
import BaseService from '../src/services/api';

const ProductContext = React.createContext();

function ProductProvider(props){
    const [products, setProducts] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    const optionDefault = { text : "Selecione uma categoria ", value: 0};
    const [productList, setProductList] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => setProductList(products), [products]);

    let filter = (atribute, value) => {

        if (value == optionDefault.value ||  value == "TODOS OS PRODUTOS"){
            setProductList(products);
        }else{

            let listFilter = [];
            products.filter(prod => prod.tipoDoProduto.toUpperCase() == value).map(productFiltered => (
                listFilter.push(productFiltered)
            ))

            setProductList(listFilter);
        }
    }

    useEffect(() => {
        let path = `/produtos?page=${page}`;
        BaseService.getProduct(path)
            .then(res => setProducts(res.data.docs))
            .catch(error => console.log(error))

    }, [page])

}