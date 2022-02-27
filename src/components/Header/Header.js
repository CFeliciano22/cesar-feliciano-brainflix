import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import search from "../../assets/Icon/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icon/upload.svg"

function Header(){

    return(
        <header>
        <nav className="menu">
            <a href=""><img className="menu__logo" src={logo} alt="Brainflix logo"/></a>
            <div className="container">
            <div className="menu__bar">
            <input className="menu__bar-input" id="search" type="search" name="search" placeholder="Search"/>
            <img className="menu__bar--search-icon" src={search} alt="search"/>
            <img className="menu__bar--avatar" src={avatar} alt="avatar"/>
            </div>
            <div className="menu__button--container">
            <button className="menu__button">UPLOAD</button>
            <img className="menu__button-image" src={upload} alt="upload"/>
            </div>
            </div>
        </nav>
        </header>
    )
}

export default Header