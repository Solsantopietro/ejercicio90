import React, { useState } from 'react'


const Search = ({buscarProducto}) => {

  const [valorDelInput, setValorDelInput] = useState('')


    const handleChange = (e) => {
        setValorDelInput(e.target.value)
        buscarProducto(e)

        console.log(valorDelInput)

      }


    return (
        <div className="Search">
            <label>
                <input type="text"
                    placeholder="Por ej, chair"
                    value={valorDelInput}
                    onChange={handleChange}
                />
            </label>
            <button onClick={buscarProducto}>BUSCAR</button>
        </div>
    );
}

export default Search;
