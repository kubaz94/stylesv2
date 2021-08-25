import styles from './ActionBar.module.css'


function ActionBar() {
    return (
        <div className={styles.actionBarWrapper}>
            <div className={styles.actionBarLeft}>
                <button className={styles.addCaseButton}>+ Dodaj sprawę</button>
                <input className={styles.searchInput} placeholder="szukaj..." />
            </div>
            <div className={styles.actionBarRight}>
                <span>Status:</span>
                <div>
                    <input type="radio" id="statusChoice1" name="status" value="dostepny" />
                    <label for="statusChoice1">Dostępny</label>

                    <input type="radio" id="statusChoice2" name="status" value="przerwa" />
                    <label for="statusChoice2">Przerwa</label>

                    <input type="radio" id="statusChoice3" name="status" value="obslugaspraw" />
                    <label for="statusChoice3">Obsługa spraw</label>
                </div>
            </div>
        </div>
    );
  }
  
  export default ActionBar;
  