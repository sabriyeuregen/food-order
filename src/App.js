import { Routes,Route} from "react-router-dom";
import React, {useState} from "react";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import BasketCard from "./components/BasketCard/BasketCard";
import { BasketProvider } from "./components/store/BasketContext"; 

const App=()=> {
    
    const [basketCardShown,setBasketCardShown]=useState(false);

   const showCardHandler=()=>{

     setBasketCardShown(true);
   }

   const hideCardHandler=()=>{

      setBasketCardShown(false);
   }


  
   

  return (
    <div className="App">
      <BasketProvider>
     {basketCardShown && <BasketCard onClose={hideCardHandler} />}
      <Header onShowCard={showCardHandler} />
<<<<<<< HEAD
     
=======
>>>>>>> 58eddeb4b3ecf953caae5cb0e8322a1de45838b1
     <Navigation></Navigation>
     <Routes>
       <Route path="/home" index element={<Home/>}/>
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/contact" element={<Contact/>} /> 
       <Route path="/products" element={<Products/>} />
        </Routes> 
<<<<<<< HEAD
        </CardProvider>
=======
        </BasketProvider>
>>>>>>> 58eddeb4b3ecf953caae5cb0e8322a1de45838b1
      
    </div>
  );
}

export default App;
