
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"></a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/services">Serviços</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar