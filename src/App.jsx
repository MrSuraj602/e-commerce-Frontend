import "./App.css";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          {/* <HomePage/> */}
          {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Cart/> */}
          {/* <Checkout /> */}
          {/* <Order/> */}
          <OrderDetails/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
