import { Route, BrowserRouter, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Notfound from "./components/Notfound.jsx";
import Product from "./components/Product.jsx";
import Orders from "./components/Orders.jsx";
import AdminLayot from "./components/User/Layout";
import Dashbord from "./components/Dashbord.jsx";
import Payments from "./components/Payments.jsx"
import Customer from "./components/Customer.jsx";
import Setting from './components/Setting.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
