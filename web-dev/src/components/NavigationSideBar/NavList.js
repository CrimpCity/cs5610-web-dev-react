import NavItem from "./NavItem.js";
import { useSelector } from "react-redux";


const NavList = (active) => {
    const Navs = useSelector(state => state.navs);
    return (
        <>
            {Navs.map((nav, index) => { return (NavItem(nav, active, index)); })}
        </>
    );
}

export default NavList;