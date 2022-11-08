import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ResetPasswordScreen from './screens/ResetPasswordScreen'
import NewPasswordScreen from "./screens/NewPasswordScreen";
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import Story from './components/Story'
import Collections from './components/Collections'
import Contact from './components/Contact'
import Necklaces from './components/Necklaces'
import Bracelets from './components/Bracelets'
import Trees from './components/Trees'
import Jewelry from './components/Jewelry'
import Pendants from './components/Pendants'
import StatementPieces from './components/StatementPieces'
import Miscellaneous from './components/Miscellaneous'




const App = () => {


  return (
    <Router>
      <Header />
      <main className=''>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/reset' component={ResetPasswordScreen} />
          <Route path='/update_password/:id' component={NewPasswordScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/collections' component={Collections} />
          <Route path='/admin/productlist' component={ProductListScreen} exact />
          <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
        </Container>

        <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/Necklaces/:pageNumber' component={Necklaces} />
        <Route path='/Bracelets/:pageNumber' component={Bracelets} />
        <Route path='/Pendants/:pageNumber' component={Pendants} />
        <Route path='/Trees/:pageNumber' component={Trees} />
        <Route path='/Jewelry/:pageNumber' component={Jewelry} />
        <Route path='/StatementPieces/:pageNumber' component={StatementPieces} />
        <Route path='/Miscellaneous/:pageNumber' component={Miscellaneous} />
        <Route path='/contact' component={Contact} />
        <Route path='/story' component={Story} />





      </main>
      <Footer />
    </Router>
  )
}

export default App
