import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters.jsx";
import AdminGuard from "./admin/AdminGuard.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminProducts from "./admin/AdminProducts.jsx";
import AdminOrders from "./admin/AdminOrders.jsx";
function App() {
  return (
    <Routes>
      <Route element={<AdminGuard />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Route>
      <Route path="/*" element={<CustomerRouters />} />
    </Routes>
  );
}

export default App;
