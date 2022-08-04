import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";


import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const App=()=> {
  return (
    <div className="App">
     <Header></Header>
    <Navigation></Navigation>
     <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/contact" element={<Contact/>} /> 
       <Route path="/products" element={<Products/>} />
        </Routes> 
     
     
    </div>
  );
}

export default App;
