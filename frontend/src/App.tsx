import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Home from "./pages/Home"
import "./App.scss"
import { CreateUser } from "./pages/CreateUser"
import HamburgerBtn from "./NavBar/HamburgerBtn"
import NavBar from "./NavBar/NavBar"

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const toggleMenu = () => {
    setIsMenuVisible((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      <HamburgerBtn onClick={toggleMenu} />
      <div>
        <NavBar isVisible={isMenuVisible} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
