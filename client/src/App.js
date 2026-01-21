import './App.css';
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>⏰ Clock Shop</h1>
        <p>Welcome to our clock e-commerce site!</p>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
