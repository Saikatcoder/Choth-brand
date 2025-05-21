import { Route, BrowserRouter, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Notfound from "./components/Admin/Notfound.jsx";
import Product from "./components/Admin/Product.jsx";
import Orders from "./components/Admin/Orders.jsx";
import AdminLayot from "./components/Admin/Layout.jsx";
import Dashbord from "./components/Admin/Dashbord.jsx";
import Payments from "./components/Admin/Payments.jsx"
import Customer from "./components/Admin/Customer.jsx";
import Setting from './components/Admin/Setting.jsx';
import Auth from './components/Admin/Auth.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin" element={<AdminLayot />}>
          <Route path="dashbord" element={<Dashbord/>} />
          <Route path="customer" element={<Customer/>} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payments" element={<Payments/>} />
          <Route path="setting" element={<Setting/>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
