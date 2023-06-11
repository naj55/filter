//import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Login from './components/Login'
import Cards from './components/cards'
import './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Flowers" element={<Cards />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/nav" element={<Nav />}></Route>
      </Routes>

    </>
  )
}

export default App
