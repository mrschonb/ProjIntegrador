import './App.css';
import sanate_logo from './media/sanate_logo.png';
import Navbar from './components/Navbar';
import Title from './components/Title';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import Cart from './components/Cart';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Register from './components/Register';
import { useState } from 'react';


//settings


function App() {
  const [user, setUser] = useState({});
  const [show_register, setShowRegister] = useState(false);
  const [view_mode, setViewMode] = useState("products");
  const [title_text, setTitleText] = useState("Browse Products");
  const [cart, setCart] = useState([]);
  const [new_user, setNewUser] = useState({});
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "Mon Sep 20 2021",
      items: [
        "Capriflex", 
        "Zanderprofen", 
        "Tetracin",
      ],
      price: 817.80,
      status: "Delivered"
    },
    {
      id: 2,
      date: "Fri Oct 19 2021",
      items: [
        "Tetracin", 
        "Capriflex", 
      ],
      price: 502.90,
      status: "Pending"
    },
    {
      id: 3,
      date: "Wed Nov 24 2021",
      items: [
        "Tetracin",
      ],
      price: 118.53,
      status: "Sent"
    },
  ]);

  // {
  //   "id": 1,
  //   "user": 10,
  //   "pharmacy": 1,
  //   "order_datetime": "2021-10-26T16:26:00",
  //   "sent_datetime": "",
  //   "status": "waiting",
  //   "content": ["Tylenol"],
  //   "total": 12.5
  // }

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Capriflex",
      brand: "Pfizer",
      price: 384.37,
      stock: 42,
      warehouse_stock: 200
    },
    {
      id: 2,
      name: "Zandertren",
      brand: "Pfizer",
      price: 1.06,
      stock: 55,
      warehouse_stock: 250
    },
    {
      id: 3,
      name: "Zanderprofen",
      brand: "Astra Zeneca",
      price: 314.90,
      stock: 23,
      warehouse_stock: 300
    },
    {
      id: 4,
      name: "Tetraflex",
      brand: "Johnson and Johnson",
      price: 40.62,
      stock: 6,
      warehouse_stock: 150
    },
    {
      id: 5,
      name: "Tetracin",
      brand: "Pfizer",
      price: 118.53,
      stock: 101,
      warehouse_stock: 230
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
    id: "user@mail.com",
    name: "Jeanette Rich",
    email: "user@mail.com",
    city: "Monterrey",
    area: "Centro",
    address: "Avenue A",
    type: "Customer",
  };

  const default_pharmacist = {
    id: "sed@tellus.net",
    name: "Mira Mathis",
    email: "sed@tellus.net",
    city: "Mexico City",
    area: "Santa Fe",
    address: "",
    type: "Pharmacist"
  };

  // REST FUNCTIONS
  const api_server = "http://localhost:5001/proj-integrador-1/us-central1/"

  

  const test_request = async () => {
    const endpoint = `${api_server}getAllPharmacies`;
    const res = await fetch(endpoint).then(response => response.json());
    console.log(JSON.stringify(res));
  }

  // INTERNAL FUNCTIONS

  const addToCart = (item) => {
    //console.log(item);
    setCart([...cart, item]);
  }

  const removeFromCart = (item_index) => {
    // setCart(cart.splice(item_index, 1));

    setCart(cart.filter((item, index) => index !== item_index));

    // setCart(cart.filter(product => product.name !== item_name));
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
      case "userprefs":
        setViewMode("userprefs");
        setTitleText("Edit profile settings");
        break;
      default:
        setViewMode("products");
        setTitleText("Browse Products");
      break;
    }
  }

  const logUserIn = (username) => {
    //console.log("LOG IN: "+username);
    // console.log(e);
    if(username === "pharma"){
      setUser(default_pharmacist);
      switchViewMode("restock");
    }else{
      setUser(default_user);
      setViewMode("products");
    }
    setShowRegister(false);

    // console.log(default_user);
    // console.log(user);
  }

  const logUserOut = () => {
    //console.log("LOG OUT");
    setUser({});
  }

  const registerUser = (usr) => {
    // e.preventDefault();
    
    // apiCreateUser(usr);

    console.log(usr);
    //setShowRegister(false);
  }

  const countProductInCart = (prod_id) => {
    return cart.filter((product) => product.name === prod_id).length;
    // return cart.filter((product) => product === prod_id).length;
  }

  const cartCheckout = (new_order) => {
    setOrders([...orders, new_order]);
    setCart([]);
    return 1;
  }

  const restockItem = (item_id, index, restock_ammount) => {
    //update stock in DB

    // console.log(index);
    // console.log(products[index]);
    let edited_product = products[index];
    edited_product.stock += Number(restock_ammount);
    edited_product.warehouse_stock -= Number(restock_ammount);
    // console.log(edited_product);
    setProducts(products.map((product, i) => {
      if(i === index){
        return edited_product;
      }else{
        return product;
      }
    }));

    // products[index].stock += Number(restock_ammount);
    // products[index].warehouse_stock -= restock_ammount;

    // let edited_product = products.filter( (product) => product.id === item_id )[0];
    // //console.log(edited_product);
    // edited_product.stock = Number(restock_ammount)+edited_product.stock;
    // edited_product.warehouse_stock = edited_product.warehouse_stock - Number(restock_ammount);
    // setProducts([...products.filter( (product) => product.id !== item_id), edited_product]);
  }

  const updateOrderStatus = (order_id, new_status) => {
    let edited_order = orders.filter((order) => order.id === order_id)[0];
    edited_order.status = new_status;
    setOrders([...orders.filter( (order) => order.id !== order_id), edited_order])
  }

  const updateUser = (user_obj) => {
    setUser(user_obj);
    alert("Information change successful. ("+user_obj+")");
  }

  if(user.type==="Customer"){
    return (
      <>
        <Navbar changeView={switchViewMode} user={user} onLogout={logUserOut}/>
        <Title text={title_text} />
        {view_mode === "products" ? <ProductList products={products} onAdd={addToCart} cartCounter={countProductInCart}/> : <></>}
        {view_mode === "orders" ? <OrderList orders={orders} mode={user.type}/> : <></>}
        {view_mode === "cart" ? <Cart items={cart} onRemove={removeFromCart} onCheckout={cartCheckout}/> : <></>}
        {view_mode === "userprefs" ? <Register user={user} onUpdate={updateUser} pharmacies={pharmacies} onLogout={logUserOut} /> : <></>}
      </>
    );
  }else if(user.type === "Pharmacist"){
    return (
      <>
        <Navbar changeView={switchViewMode} user={user} onLogout={logUserOut}/>
        <Title text={title_text} />
        {view_mode === "restock" ? <Inventory products={products} onRestock={restockItem}/> : <></>}
        {view_mode === "orders" ? <OrderList orders={orders} mode={user.type} onUpdate={updateOrderStatus}/> : <></>}
        {view_mode === "userprefs" ? <Register user={user} onUpdate={updateUser} pharmacies={pharmacies} onLogout={logUserOut} /> : <></>}
      </>
    );
  }else{
    return(
      <>
        <Login logo={sanate_logo} pharmacies={pharmacies} onRegister={registerUser} onLogin={logUserIn} showRegister={show_register} setShowRegister={setShowRegister} />
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
