import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Products } from './components/Product/Products';
const response = await axios.get('http://127.0.0.1:8080/product/');
const {data} = response

const App = () => {
  return (
    <div className="App">
      <h1>App Component</h1>
      <div className='products-container'>
        {data.map((product) => (
          <Products product={product} key={product.product_id} />
        ))}
      </div>
    </div>
  );
}

export default App;
