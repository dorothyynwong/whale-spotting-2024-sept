import "./Menu.scss"
import "../App.scss"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface MenuProps {
  isVisible: boolean
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

const Menu: React.FC<MenuProps> = ({ isVisible }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  }

  const logo = require("../images/Whale3logo.png")
  const divClass = "container-fluid d-flex justify-content-between align-items-center"

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  const isMobile = windowSize.innerWidth < 768 ? true : false

  return (
    <nav className={isMobile ? "" : "navbar navbar-expand-lg fixed-top custom-navbar"}>
      <div className={isMobile ? (isVisible ? "menuPadShow" : "menuPadHidden") : divClass}>
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Whale Whale Whale logo" width="200" />
        </a>

        <ul className="navbar-nav mb-2 mb-lg-0 d-flex w-100 justify-content-around">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/explore">
              Explore
            </a>
          </li>
        </ul>

        <button className="btn btn-outline-success px-4" style={{ width: "200px" }} onClick={handleClick}>
          Log in / Sign up
        </button>
      </div>
    </nav>
    // </div>
  )
}

export default Menu
