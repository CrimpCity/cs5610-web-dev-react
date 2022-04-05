import { Link } from "react-router-dom";


const NavItem = (nav, active, index) => {
    let isActive = "";
    if (active === nav.title) {
        isActive = "active";
    }

    const formatted = (
        <Link
            to={nav.link} className={`list-group-item list-group-item-action ${isActive}`} key={index}>
            <i className={nav.icon}></i>
            <span className="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none d-none"> {nav.title}</span>
        </Link>)

    return (formatted)
}

export default NavItem;