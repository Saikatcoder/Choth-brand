import { Route, BrowserRouter ,Routes } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import Notfound from "./components/Notfound"
import Product from "./components/User/Product"
import Orders from "./components/User/Orders"
import AdminLayot from "./components/User/Layout"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/admin" element={<AdminLayot/>} >
          <Route path="products" element={<Product/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App