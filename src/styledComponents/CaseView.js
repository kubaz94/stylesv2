import TopBar from './TopBar'
import ActionBar from './ActionBar'
import FiltersBar from './FiltersBar'
import CaseTilesContainer from './CaseTilesContainer'

function CaseView() {
    return (
        <>
            <TopBar />
            <ActionBar />
            <FiltersBar />
            <CaseTilesContainer />
        </>
    );
  }
  
  export default CaseView;