import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

export default props => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/param/123">Param #01</Link>
          </li>
          <li>
            <Link to="/param/legal">Param #02</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/naoExiste">Não Existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}