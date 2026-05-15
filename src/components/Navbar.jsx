import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🦖 Dinosaur Museum</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dinosaur">Exhibits</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar