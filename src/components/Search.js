

const Search = ({product, buscarProducto}) => {
    console.log(product)

    const handleChange = (e) => {
        setValorDelInput(e.target.value)
        console.log(setValorDelInput)
      }

    const handlerClickBuscar = (e) => {
        buscarProducto(e)
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
            <button onClick={handlerClickBuscar}>BUSCAR</button>
        </div>
    );
}

export default Search;
