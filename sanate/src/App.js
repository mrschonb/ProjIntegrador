import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Cart from './components/Cart';
import Login from './components/Login';
import Inventory from './components/Inventory';
import { useState } from 'react';


//settings


function App() {
  const [user, setUser] = useState({});
  const [show_register, setShowRegister] = useState(false);
  const [view_mode, setViewMode] = useState("products");
  const [title_text, setTitleText] = useState("Browse Products");
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "Today",
      items: [
        {item_id: 0, item_name: "Capriflex", item_price: 384.37},
        {item_id: 1, item_name: "Zanderprofen", item_price: 314.90},
        {item_id: 2, item_name: "Tetracin", item_price: 118.53}
      ],
      price: 22222,
      status: "delivered"
    },
    {
      id: 2,
      date: "Yesterday",
      items: [
        {item_id: 0, item_name: "Tetracin", item_price: 118.53},
        {item_id: 1, item_name: "Capriflex", item_price: 384.37},
      ],
      price: 1.26,
      status: "pending"
    },
    {
      id: 3,
      date: "Tomorrow",
      items: [
        {item_id: 0, item_name: "Tetracin", item_price: 118.53}
      ],
      price: 10000000.2,
      status: "sent"
    },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Capriflex",
      brand: "Pfizer",
      price: 384.37,
      stock: 42
    },
    {
      id: 2,
      name: "Zandertren",
      brand: "Pfizer",
      price: 1.06,
      stock: 55
    },
    {
      id: 3,
      name: "Zanderprofen",
      brand: "Astra Zeneca",
      price: 314.90,
      stock: 23
    },
    {
      id: 4,
      name: "Tetraflex",
      brand: "Johnson and Johnson",
      price: 40.62,
      stock: 6
    },
    {
      id: 5,
      name: "Tetracin",
      brand: "Pfizer",
      price: 118.53,
      stock: 101
    }
  ]);

  const [pharmacies, setPharmacies] = useState(
  [
    {
      "id": 1,
      "city": "Mexico City",
      "area": "Benito Juarez"
    },
    {
      "id": 2,
      "city": "Mexico City",
      "area": "Santa Fe"
    },
    {
      "id": 3,
      "city": "Mexico City",
      "area": "Huixquilucan"
    },
    {
      "id": 4,
      "city": "Mexico City",
      "area": "Roma"
    },
    {
      "id": 5,
      "city": "Guadalajara",
      "area": "Zapopan"
    },
    {
      "id": 6,
      "city": "Guadalajara",
      "area": "Providencia"
    },
    {
      "id": 7,
      "city": "Guadalajara",
      "area": "Tlaquepaque"
    },
    {
      "id": 8,
      "city": "Monterrey",
      "area": "Guadalupe"
    },
    {
      "id": 9,
      "city": "Monterrey",
      "area": "Centro"
    },
    {
      "id": 10,
      "city": "Monterrey",
      "area": "Anahuac"
    }
  ]);

  const default_user = {
    name: "Jeanette Rich",
    email: "volutpat.nunc@tellusfaucibusleo.edu",
    city: "Monterrey",
    area: "Centro",
    type: "Customer"
  };

  const default_pharmacist = {
    name: "Mira Mathis",
    email: "sed@tellus.net",
    city: "Mexico City",
    area: "Santa Fe",
    type: "Pharmacist"
  };

  const addToCart = (item) => {
    //console.log(item);
    //const new_item = {id: cart.length, ...item};
    //console.log(new_item);
    //console.log(typeof(cart));
    setCart([...cart, item]);
    //console.log(cart);
  }

  const removeFromCart = (item_name) => {
    setCart(cart.filter(product => product.name !== item_name));
    //console.log(item_name);
    //console.log(cart);
  }

  const switchViewMode = (current_view) => {
    switch(current_view){
      case "products":
        setViewMode("products");
        setTitleText("Browse Products");
      break;
      case "orders":
        setViewMode("orders");
        if(user.type==="Pharmacist"){
          setTitleText("Pending Orders");
        }else{
          setTitleText("Order history");
        }
      break;
      case "cart":
        setViewMode("cart");
        setTitleText("Checkout");
      break;
      case "restock":
        setViewMode("restock");
        setTitleText("Manage Inventory");
      break;
      default:
        setViewMode("products");
        setTitleText("Browse Products");
      break;
    }
  }

  const logUserIn = (username) => {
    console.log("LOG IN: "+username);
    // console.log(e);
    if(username === "pharma"){
      setUser(default_pharmacist);
      switchViewMode("restock");
    }else{
      setUser(default_user);
    }

    // console.log(default_user);
    // console.log(user);
  }

  const registerUser = (usr) => {
    // e.preventDefault();
    console.log("Register");
    console.log(usr);
  }

  const countProductInCart = (prod_id) => {
    return cart.filter((product) => product.name === prod_id).length;
  }

  const cartCheckout = (new_order) => {
    setOrders([...orders, new_order]);
    setCart([]);
    return 1;
  }

  const restockItem = (item_id, restock_ammount) => {
    //update stock in DB
    
    let edited_product = products.filter( (product) => product.id === item_id )[0];
    //console.log(edited_product);
    edited_product.stock = Number(restock_ammount)+edited_product.stock;
    setProducts([...products.filter( (product) => product.name !== item_id), edited_product]);
  }

  const updateOrderStatus = (order_id, new_status) => {
    let edited_order = orders.filter((order) => order.id === order_id)[0];
    edited_order.status = new_status;
    setOrders([...orders.filter( (order) => order.id !== order_id), edited_order])
  }

  if(user.type==="Customer"){
    return (
      <>
        <Navbar changeView={switchViewMode} user={user}/>
        <Title text={title_text} />
        {view_mode === "products" ? <ProductList products={products} onAdd={addToCart} cartCounter={countProductInCart}/> : <></>}
        {view_mode === "orders" ? <OrderList orders={orders} mode={user.type}/> : <></>}
        {view_mode === "cart" ? <Cart items={cart} onRemove={removeFromCart} onCheckout={cartCheckout}/> : <></>}
      </>
    );
  }else if(user.type === "Pharmacist"){
    return (
      <>
        <Navbar changeView={switchViewMode} user={user}/>
        <Title text={title_text} />
        {view_mode === "restock" ? <Inventory products={products} onRestock={restockItem}/> : <></>}
        {view_mode === "orders" ? <OrderList orders={orders} mode={user.type} onUpdate={updateOrderStatus}/> : <></>}
      </>
    );
  }else{
    return(
      <>
        <Login pharmacies={pharmacies} onRegister={registerUser} onLogin={logUserIn} showRegister={show_register} setShowRegister={setShowRegister} />
      </>
    );
  }
  
  
  //return logged_in_view;
}

/*
{view_mode === "products" ?
        <ProductList products={products} onAdd={addToCart} onRemove={removeFromCart}/> :
        <OrderList orders={orders}/> }
*/

export default App;
