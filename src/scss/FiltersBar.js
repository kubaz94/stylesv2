import './FiltersBar.scss'

import GridIcon from '../img/gridIcon.png'
import ListIcon from '../img/listIcon.png'

function FiltersBar() {
    return (
        <div className="filtersBarWrapper">
            <div className="assignmentTypes">
                <p className={`assignmentType activeAssignmentType`}>Moje zgłoszenia</p>
                <p className="assignmentType">Nieprzypisane</p>
                <p className="assignmentType">Wszystkie</p>
            </div>
            <div className="caseDetailsFilters">
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
            </div>
            <div className="layoutIcons">
                <img className="layoutIcon" src={GridIcon} alt="grid icon" />
                <img className="layoutIcon" src={ListIcon} alt="list icon" />
            </div>
        </div>
    );
  }
  
  export default FiltersBar;
  