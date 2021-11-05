import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Cart from './components/Cart'

import { useState } from 'react'


//settings


function App() {
  const [view_mode, setViewMode] = useState("products");
  const [title_text, setTitleText] = useState("Browse Products");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "Today",
      price: 3.14,
      status: "delivered"
    },
    {
      id: 2,
      date: "Yesterday",
      price: 1.26,
      status: "pending"
    },
    {
      id: 3,
      date: "Tomorrow",
      price: 10000000.2,
      status: "sent"
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Capriflex",
      brand: "Pfizer",
      price: 384.37
    },
    {
      id: 2,
      name: "Zandertren",
      brand: "Pfizer",
      price: 1.06
    },
    {
      id: 3,
      name: "Zanderprofen",
      brand: "Astra Zeneca",
      price: 314.9
    },
    {
      id: 4,
      name: "Tetraflex",
      brand: "Johnson and Johnson",
      price: 40.62
    },
    {
      id: 5,
      name: "Tetracin",
      brand: "Pfizer",
      price: 118.53
    }
  ]);

  const addToCart = (item) => {
    console.log(item);
    //const new_item = {id: cart.length, ...item};
    //console.log(new_item);
    console.log(typeof(cart));
    setCart([...cart, item]);
    console.log(cart);
  }

  const removeFromCart = (item_name) => {
    setCart(cart.filter(product => product.product_name !== item_name));
    console.log(item_name);
    console.log(cart);
  }

  const switchViewMode = (current_view) => {
    switch(current_view){
      case "products":
        setViewMode("products");
        setTitleText("Browse Products");
      break;
      case "orders":
        setViewMode("orders");
        setTitleText("View Orders");
      break;
      case "cart":
        setViewMode("cart");
        setTitleText("Checkout");
      break;
      default:
        setViewMode("products");
        setTitleText("Browse Products");
      break;
    }
  }
  
  return (
    <>
      <Navbar changeView={switchViewMode} />
      <Title text={title_text} />
      {view_mode === "products" ? <ProductList products={products} onAdd={addToCart} onRemove={removeFromCart}/> : <></>}
      {view_mode === "orders" ? <OrderList orders={orders}/> : <></>}
      {view_mode === "cart" ? <Cart items={cart} onRemove={removeFromCart} /> : <></>}
    </>
  );
}

/*
{view_mode === "products" ?
        <ProductList products={products} onAdd={addToCart} onRemove={removeFromCart}/> :
        <OrderList orders={orders}/> }
*/

export default App;
