import { Link } from "react-router";

function NavLink({ title, to }) {
    return(
        <Link className="navbar-link" to={to}>
            { title }
        </Link>
    )
}

export { NavLink }