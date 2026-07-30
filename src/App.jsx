import "./App.css";
import Navigation from "./customer/components/navigation/Navigation.jsx";
import HomePage from "./customer/Pages/HomePage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          {/* <HomePage /> */}
          <HomePage/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
