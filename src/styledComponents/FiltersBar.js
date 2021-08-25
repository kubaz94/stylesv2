import GridIcon from '../img/gridIcon.png'
import ListIcon from '../img/listIcon.png'

import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    font-size: 18px;
`
const FiltersBarWrapper = styled(Flex)`
    padding: 0 35px;
    margin: 40px 0;
`
const AssignmentTypes = styled(Flex)`
    font-weight: bold;
`
const AssignmentType = styled(Flex)`
    cursor: pointer;
`
const ActiveAssignmentType = styled(AssignmentType)`
    border-bottom: 1px solid #000000;
`
const CaseDetailsFilters = styled(Flex)``
const LayoutIcons = styled(Flex)``
const LayoutIcon = styled.img`
    height: 30px;
    cursor: pointer;
`

function FiltersBar() {
    return (
        <FiltersBarWrapper>
            <AssignmentTypes>
                <ActiveAssignmentType>Moje zgłoszenia</ActiveAssignmentType>
                <AssignmentType>Nieprzypisane</AssignmentType>
                <AssignmentType>Wszystkie</AssignmentType>
            </AssignmentTypes>
            <CaseDetailsFilters>
                <label for="elementType">Typ elementu:</label>
                <select name="elementType" id="elementType">
                    <option value="wszystkie">wszystkie</option>
                    <option value="inne">inne</option>
                    <option value="jakiesinne">jakies jeszcze inne</option>
                </select>

                <label for="status">Status:</label>
                <select name="status" id="status">
                    <option value="wtoku">w toku</option>
                    <option value="zakończony">zakończony</option>
                </select>

                <label for="start">Czas od:</label>
                <input type="date" id="start" />

                <label for="end">do:</label>
                <input type="date" id="end" />
            </CaseDetailsFilters>
            <LayoutIcons>
                <LayoutIcon src={GridIcon} alt="grid icon" />
                <LayoutIcon src={ListIcon} alt="list icon" />
            </LayoutIcons>
        </FiltersBarWrapper>
    );
  }
  
  export default FiltersBar;
  