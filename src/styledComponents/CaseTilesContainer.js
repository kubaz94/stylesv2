import casesMock from '../casesMock.json'
import SingleCaseTile from './SingleCaseTile'

import styled from 'styled-components'

const CaseTilesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 50px;
`


const CasesTilesContainer = () => {
    return (
        <CaseTilesContainer>
            {casesMock.map(singleCase => <SingleCaseTile {...singleCase} />)}
        </CaseTilesContainer>
    )
}
  
  export default CasesTilesContainer;
  