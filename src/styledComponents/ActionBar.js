import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ActionBarWrapper = styled(Flex)`
    padding: 0 35px;
    margin-top: 50px;
    font-weight: bold;
    font-size: 20px;
`
const UniqueActionBar = styled(Flex)``
const AddCaseButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    width: 160px;
    height: 30px;
    border-radius: 20px;
    margin-right: 40px;
    font-weight: bold;
`
const SearchInput = styled.input`
    border-color: #000000;
    width: 400px;
`

function ActionBar() {
    return (
        <ActionBarWrapper>
            <UniqueActionBar>
                <AddCaseButton>+ Dodaj sprawę</AddCaseButton>
                <SearchInput placeholder="szukaj..." />
            </UniqueActionBar>
            <UniqueActionBar>
                <span>Status:</span>
                <div>
                    <input type="radio" id="statusChoice1" name="status" value="dostepny" />
                    <label for="statusChoice1">Dostępny</label>

                    <input type="radio" id="statusChoice2" name="status" value="przerwa" />
                    <label for="statusChoice2">Przerwa</label>

                    <input type="radio" id="statusChoice3" name="status" value="obslugaspraw" />
                    <label for="statusChoice3">Obsługa spraw</label>
                </div>
            </UniqueActionBar>
        </ActionBarWrapper>
    );
  }
  
  export default ActionBar;
  