import dotsMenu from '../img/dotsMenu.png'
import emailIcon from '../img/email.png'
import phoneIcon from '../img/phone.png'

import styled from 'styled-components'

const CaseTile = styled.div`
    width: 350px;
    height: 200px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;
    background-color: lightgray;
`
const CaseRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CaseMenu = styled.img`
    height: 30px;
`
const CaseId = styled.span`
    font-weight: bolder;
    margin-left: 10px;
`
const Icon = styled.img`
    height: 30px;
`
const CaseContact = styled.p`
    margin-right: auto;
`

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
        <CaseTile>
            <CaseRow>
                <CaseRow>
                    <p>Sprawa:</p>
                    <CaseId>{caseId}</CaseId>
                </CaseRow>
                <p>{casePriority}</p>
                <CaseMenu src={dotsMenu} alt="dots menu" />
            </CaseRow>
            <CaseRow>
                {caseDate} {caseStatus}
            </CaseRow>
            {caseEmail && (
                <CaseRow>
                    <Icon src={emailIcon} alt="email icon" />
                    <CaseContact>{caseEmail}</CaseContact>
                </CaseRow>
            )}
            {casePhoneNumber && (
                <CaseRow>
                    <Icon src={phoneIcon} alt="phone icon" />
                    <CaseContact>{casePhoneNumber}</CaseContact>
                </CaseRow>
            )}
            <p>{caseResultDescription}</p>
            <CaseRow>
                <p>{casePatient}</p>
                <p>{caseAssignee}</p>
            </CaseRow>
        </CaseTile>
    );
  }
  
  export default SingleCaseTile;
  