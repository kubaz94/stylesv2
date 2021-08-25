import styles from './SingleCaseTile.module.css'

import dotsMenu from '../img/dotsMenu.png'
import emailIcon from '../img/email.png'
import phoneIcon from '../img/phone.png'

function SingleCaseTile({
    caseId,
    caseDate,
    caseStatus,
    casePriority,
    casePhoneNumber,
    caseEmail,
    caseResultDescription,
    casePatient,
    caseAssignee
}) {
    return (
        <div className={styles.caseTile}>
            <div className={styles.caseRow}>
                <div className={styles.caseRow}>
                    <p>Sprawa:</p>
                    <span className={styles.caseId}>{caseId}</span>
                </div>
                <p>{casePriority}</p>
                <img className={styles.caseMenu} src={dotsMenu} alt="dots menu" />
            </div>
            <p className={styles.caseRow}>
                {caseDate} {caseStatus}
            </p>
            {caseEmail && (
                <div className={styles.caseRow}>
                    <img className={styles.icon} src={emailIcon} alt="email icon" />
                    <p className={styles.caseContact}>{caseEmail}</p>
                </div>
            )}
            {casePhoneNumber && (
                <div className={styles.caseRow}>
                    <img className={styles.icon} src={phoneIcon} alt="phone icon" />
                    <p className={styles.caseContact}>{casePhoneNumber}</p>
                </div>
            )}
            <p>{caseResultDescription}</p>
            <div className={styles.caseRow}>
                <p>{casePatient}</p>
                <p>{caseAssignee}</p>
            </div>
        </div>
    );
  }
  
  export default SingleCaseTile;
  