import styles from './TopBar.module.css'

import xLabLogo from '../img/xLabLogo.png'
import hamburgerMenu from '../img/hamburgerMenu.jpg'

function TopBar() {
    return (
        <div className={styles.topBarWrapper}>
            <div className={styles.topBarLeft}>
                <img className={styles.logo} src={xLabLogo} alt="x lab logo" />
                <img className={styles.menu} src={hamburgerMenu} alt="hamburger" />
                <p>Informacja pacjenta // CSS MODULES</p>
            </div>
            <div className={styles.topBarRight}>
                <p className={styles}>Jan Kowalski \/</p>
                <p className={styles.logout}>wyloguj</p>
            </div>
        </div>
    );
  }
  
  export default TopBar;
  