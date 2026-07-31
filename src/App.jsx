import "./App.css";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
          <ProductDetails/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
