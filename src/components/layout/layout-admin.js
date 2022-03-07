import { Outlet } from "react-router-dom"

const Layout = () => {


    return (
        <div className="vw-100 vh-100">
            <div className="container-fluid row bg-dark d-flex align-items-center p-0 m-0">
                <h1 className="text-danger col-3">Netflix</h1>
                <div className="col-5"></div>
                <a href="/admin/register" className="navBar-link col-2">Sign Up Admin</a>
                <a href="/admin/alquileres" className="navBar-link col-2">Todos los alquileres</a>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout