import NavLinks from "./NavLinks";
import './Navigation.css';
import logo from './../../Images/Extraclean.png';

const DesktopNavigation = () =>{
    return(
        <nav className="DesktopNavigation">
            <img src={logo} alt="logo"></img>
            <NavLinks />
        </nav>
    )
}

export default DesktopNavigation;