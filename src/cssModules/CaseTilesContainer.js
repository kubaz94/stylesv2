import styles from './CaseTilesContainer.module.css'
import casesMock from '../casesMock.json'
import SingleCaseTile from './SingleCaseTile'


const CasesTilesContainer = () => {
    return (
        <div className={styles.caseTilesContainer}>
            {casesMock.map(singleCase => <SingleCaseTile {...singleCase} />)}
        </div>
    )
}
  
  export default CasesTilesContainer;
  