import './products.css'


export const Products = (props) => {

  const {product} = props
  const {name,price,stockAvailable,description} = product;
  return (
    <div className='product'>
      <h1 className="product-title">{name}</h1>
      <div className="product-price">${price}</div>
      <div className="product-stock">{stockAvailable?"In Stock":"Out of Stock"}</div>
      <div className="product-description">{description}</div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}