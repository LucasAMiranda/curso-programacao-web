import React, {useState} from "react";

function FilterProduct({plural_name, singular_name, categories, functionFilter}){
    const optionDetail = {text: "Selecione uma " +singular_name, value:0}
    const [select, setSelect] = useState(optionDetail);

    let handleChange = (event) => {
        setSelect(event.target.value);
        functionFilter("Category", event.target.value)
    }

    let text_label = () =>{
        return plural_name ? "Filtrar por " + (plural_name) + " : " : "Filtrar"
    }

    return(
        <form>
            <div className="form-group">
                <br/>
                <label>{text_label()}</label>
                <select className="form-control" id="FormControlSelect" value={select} onChange={handleChange}>
                    <option value={optionDetail.value}>{optionDetail.text}</option>
                    {
                        categories.map((category, index) => {
                            return(
                                <option key={index} value={category}>{category}</option>
                            );
                        })
                    }
                </select>
            </div>
        </form>
    )
}