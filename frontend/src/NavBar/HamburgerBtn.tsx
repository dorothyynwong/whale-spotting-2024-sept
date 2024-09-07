import React from "react"
import "./NavBar.scss"

interface HamburgerBtnProps {
  onClick: () => void
}

const HamburgerBtn: React.FC<HamburgerBtnProps> = ({ onClick }) => {
  return (
    <>
      <button className="hamburger" onClick={onClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </>
  )
}

export default HamburgerBtn
