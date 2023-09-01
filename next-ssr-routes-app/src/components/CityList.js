import React from 'react';

const CityList = ({cities, onCityClick}) => {
    return(
        <div>
            <h2>Cidades Pesquisadas</h2>
            <ul>
                {cities.map(city => {
                    <li key={city.id}>
                        <button onClick={() => onCityClick(city)}>{city.name}</button>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default CityList;