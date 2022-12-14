import { Home } from "./pages/Home/Home"
import { Error404 } from "./pages/Error404/Error404"
import Login from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { User } from "./pages/User/User"
import { Product } from "./pages/Product/Product"
import { Cart } from "./pages/Cart/Cart"
import { CartUser } from "./pages/Cart/CartUser"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { useState } from "react"
import { PrivateRoute } from "./routes/PrivateRoute"
import ("./App.css")


const App = () => {
  const [user, setUser] = useState({isLogin: false});
  return (
    <div className="app-body">
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/login' element={<Login user = {user} setUser={setUser}/>} />
      <Route exact path='/register' element={<Register user = {user}/>} />
      <Route exact path='/products' element={<Product/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/Error404' element={<Error404/>} />
      <Route exact path='/user' element={<PrivateRoute user = {user}><User/></PrivateRoute>} />
      <Route exact path='/cart/user' element={<PrivateRoute user = {user}><CartUser/></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/Error404" />} />
    </Routes>
    <Footer/>
  </Router>
    </div>
)
}
export default App;

