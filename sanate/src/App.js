import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';


//settings


function App() {
  const orders = [
    {
      date: "Today",
      price: 3.14,
      status: "delivered"
    },
    {
      date: "Yesterday",
      price: 1.26,
      status: "pending"
    },
    {
      date: "Tomorrow",
      price: 10000000.2,
      status: "sent"
    },
  ]

  const products = [
    {
      id: "Capriflex",
      name: "Capriflex",
      brand: "Pfizer",
      price: 384.37
    },
    {
      id: "Zandertren",
      name: "Zandertren",
      brand: "Pfizer",
      price: 1.06
    },
    {
      id: "Zanderprofen",
      name: "Zanderprofen",
      brand: "Astra Zeneca",
      price: 314.9
    },
    {
      id: "Tetraflex",
      name: "Tetraflex",
      brand: "Johnson and Johnson",
      price: 40.62
    },
    {
      id: "Tetracin",
      name: "Tetracin",
      brand: "Pfizer",
      price: 118.53
    }
  ]

  const title_text = "Browse";

  
  return (
    <div className="App">
      <Navbar />
      <Title text={title_text}/>
      <ProductList products={products}/>
      <OrderList orders={orders}/>
    </div>
  );
}

export default App;
