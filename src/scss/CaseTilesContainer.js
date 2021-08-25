import './CaseTilesContainer.scss'
import casesMock from '../casesMock.json'
import SingleCaseTile from './SingleCaseTile'


const CasesTilesContainer = () => {
    return (
        <div className="caseTilesContainer">
            {casesMock.map(singleCase => <SingleCaseTile {...singleCase} />)}
        </div>
    )
}
  
  export default CasesTilesContainer;
  