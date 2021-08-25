import xLabLogo from '../img/xLabLogo.png'
import hamburgerMenu from '../img/hamburgerMenu.jpg'

import styled from 'styled-components'

const SharedTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`
const TopBarWrapper = styled(SharedTopBar)`
    padding: 0 20px;
    border: 1px solid #000000;
`
const TopBarImg = styled.img`
    height: 50px;
`
const Logout = styled.p`
    margin-left: 20px;
    border-bottom: 1px solid #000000;
`

function TopBar() {
    return (
        <TopBarWrapper>
            <SharedTopBar>
                <TopBarImg src={xLabLogo} alt="x lab logo" />
                <TopBarImg src={hamburgerMenu} alt="hamburger" />
                <p>Informacja pacjenta // STYLED COMPONENTS</p>
            </SharedTopBar>
            <SharedTopBar>
                <p>Jan Kowalski \/</p>
                <Logout>wyloguj</Logout>
            </SharedTopBar>
        </TopBarWrapper>
    );
  }
  
  export default TopBar;
  