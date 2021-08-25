import './TopBar.scss'

import xLabLogo from '../img/xLabLogo.png'
import hamburgerMenu from '../img/hamburgerMenu.jpg'

function TopBar() {
    return (
        <div className="topBarWrapper">
            <div className="topBarLeft">
                <img className="logo" src={xLabLogo} alt="x lab logo" />
                <img className="menu" src={hamburgerMenu} alt="hamburger" />
                <p>Informacja pacjenta // SCSS </p>
            </div>
            <div className="topBarRight">
                <p>Jan Kowalski \/</p>
                <p className="logout">wyloguj</p>
            </div>
        </div>
    );
  }
  
  export default TopBar;
  