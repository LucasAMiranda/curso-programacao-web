import React from 'react';

import FilterProduct from '../FilterProduct';

function InputFilter(){
    const categories = ["TODOS OS PRODUTOS", "LIVRO" , "ELETRÔNICO", "INFORMÁTICA", "BRINQUEDOS E JOGOS", "MÓVEIS E DECORAÇÃO"];

    return(
        <div>
            {value => 
               <FilterProduct plural_name="Categorias"
               singular_name = "Categoria"
               categories = {categories}
               fuctionFilter= {value.filter} />
            }
        </div>
    )
}
export default InputFilter;