import './Card.scss';
const Card = ({product, type, price, img, stock, noStock}) => {
    console.log(product, type, price, img)
    return (
       <article className={ noStock ? "card-disabled" : "card"}>
        <h1 className="product-name">{product}</h1>
        {stock ? <p>ON SALE!</p> : ""}
        <p className="product-type">{type}</p>
        <p className="product-price">{price}</p>
        <img className="product-img" src={img} />
    </article> 
    )
}

export default Card