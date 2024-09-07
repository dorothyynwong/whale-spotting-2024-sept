import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import { CreateUser } from "./pages/CreateUser"
// import Header from "./Header/Header"
import HamburgerBtn from "./SideMenu/HamburgerBtn"
import Menu from "./SideMenu/Menu"

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <HamburgerBtn onClick={toggleMenu} />
      <div>
        <Menu isVisible={isMenuVisible} />
      </div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
