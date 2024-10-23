import logo from './logo.svg';
import './App.css';
import { Products } from './components/Product/Products';

const products = [
  {
    product_id: 2,
    name: "William T-shirt",
    price: "3000₹",
    stockAvailable: true,
    description: "A Black T-shirt"
  },
  {
    product_id: 3,
    name: "Utility Jacket",
    price: "1100₹",
    stockAvailable: true,
    description: "A versatile jacket for all seasons."
  },
  {
    product_id: 4,
    name: "Leather Boots",
    price: "1500₹",
    stockAvailable: true,
    description: "Stylish boots for any occasion."
  },
  {
    product_id: 5,
    name: "Leather Boots",
    price: "1500₹",
    stockAvailable: true,
    description: "Stylish boots for any occasion."
  }
];

const App = () => {
  return (
    <div className="App">
      <h1>App Component</h1>
      <div className='products-container'>
        {products.map((product) => (
          <Products product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
}

export default App;
