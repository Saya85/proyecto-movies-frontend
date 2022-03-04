import { NavLink, Link, Outlet} from "react-router-dom";

function Perfil() {
  let activeClassName = "underline"
  let liClassName = "nav-item";
  let navLink = "nav-link";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/perfil">perfil</NavLink>
            </li> 
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="listaMascota">mascotas</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="citasPend">citas</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="logout">logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div  className="layout-perfil">
              <Outlet/>
      </div>
    </div>
  );
}

export default Perfil;