import './SingleCaseTile.scss'

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
        <div className="caseTile">
            <div className="caseRow">
                <div className="caseRow">
                    <p>Sprawa:</p>
                    <span className="caseId">{caseId}</span>
                </div>
                <p>{casePriority}</p>
                <img className="caseMenu" src={dotsMenu} alt="dots menu" />
            </div>
            <p className="caseRow">
                {caseDate} {caseStatus}
            </p>
            {caseEmail && (
                <div className="caseRow">
                    <img className="icon" src={emailIcon} alt="email icon" />
                    <p className="caseContact">{caseEmail}</p>
                </div>
            )}
            {casePhoneNumber && (
                <div className="caseRow">
                    <img className="icon" src={phoneIcon} alt="phone icon" />
                    <p className="caseContact">{casePhoneNumber}</p>
                </div>
            )}
            <p>{caseResultDescription}</p>
            <div className="caseRow">
                <p>{casePatient}</p>
                <p>{caseAssignee}</p>
            </div>
        </div>
    );
  }
  
  export default SingleCaseTile;
  