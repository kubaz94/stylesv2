import styles from './FiltersBar.module.css'

import GridIcon from '../img/gridIcon.png'
import ListIcon from '../img/listIcon.png'

function FiltersBar() {
    return (
        <div className={styles.filtersBarWrapper}>
            <div className={styles.assignmentTypes}>
                <p className={`${styles.assignmentType}, ${styles.activeAssignmentType}`}>Moje zgłoszenia</p>
                <p className={styles.assignmentType}>Nieprzypisane</p>
                <p className={styles.assignmentType}>Wszystkie</p>
            </div>
            <div className={styles.caseDetailsFilters}>
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
            <div className={styles.layoutIcons}>
                <img className={styles.layoutIcon} src={GridIcon} alt="grid icon" />
                <img className={styles.layoutIcon} src={ListIcon} alt="list icon" />
            </div>
        </div>
    );
  }
  
  export default FiltersBar;
  