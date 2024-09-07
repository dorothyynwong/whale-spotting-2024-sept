import "./NavBar.scss"
import "../App.scss"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface NavBarProps {
  isVisible: boolean
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window
  return { innerWidth, innerHeight }
}

const NavBar: React.FC<NavBarProps> = ({ isVisible }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  }

  const logo = require("../images/Whale3logo.png")

  const [windowSize, setWindowSize] = useState(getWindowSize())
  const isMobile = windowSize.innerWidth < 768 ? true : false

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  return (
    <nav className={isMobile ? "" : "navbar navbar-expand-lg fixed-top custom-navbar"}>
      <div
        className={
          isMobile
            ? isVisible
              ? "side-menu-shown"
              : "side-menu-hidden"
            : "container-fluid d-flex justify-content-between align-items-center"
        }
      >
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
  )
}

export default NavBar
