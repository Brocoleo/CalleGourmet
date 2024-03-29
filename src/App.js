import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyles';
import { NavBar, Products, Cart , Checkout, Hero, Footer, AboutUs, Ready, Login, Orders} from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Eventos from './components/Eventos/Eventos';
import Alianzas from './components/Alianzas/Alianzas';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  
  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart =async () =>{
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) =>{
    const response = await commerce.cart.update(productId, {quantity});

    setCart(response.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (    
    <Router>
      <GlobalStyle />
        <div>
        <NavBar totalItems={cart.total_items}/>
        
        <Switch>    

          <Route exact path="/">
            <Hero />
            <Products heading='Menu' products={products} onAddToCart={handleAddToCart}/>
            <Eventos />
            <Alianzas />
            <Footer />
          </Route>

          <Route exact path="/carro">
            <Cart 
            cart={cart}
            handleUpdateCartQty = {handleUpdateCartQty}
            handleRemoveFromCart = {handleRemoveFromCart}
            handleEmptyCart = {handleEmptyCart}
            />
            <Footer />            
          </Route> 
          
          <Route exact path="/nosotros">
            <AboutUs />
            <Footer />            
          </Route> 

          <Route exact path="/comprar">
            <Checkout cart ={cart}/> 
            <Footer />           
          </Route> 


          <Route exact path="/listo">
            <Ready /> 
            <Footer />           
          </Route> 

          <Route exact path="/login">
            <Login /> 
            <Footer />           
          </Route>  

          <Route exact path="/pedidos">
            <Orders  products={products} /> 
            <Footer />           
          </Route>        
        
        </Switch>        
      </div>      
    </Router>
      
  );
}
export default App;