import scssLogo from './img/scss.png'
import questionMark from './img/question-mark.png'
import lightBulb from './img/light-bulb.jpg'

import './styles.scss'

function ScssExample() {
    return (
        <div className="testWrapper">
            <div className="firstSection">
                <img src={scssLogo} className="image" alt="method img" />
                <p className="methodDescription">This is a test paragraph for SCSS approach.</p>
            </div>
            <div className="secondSection">
                <img src={questionMark} className="image" alt="question mark" />
                <p className="performanceDescription">Let's decide which method has better performance in profiler</p>
            </div>
            <div className="thirdSection">
                <img src={lightBulb} className="image" alt="question mark" />
                <p className="generalDescription">Every method will have the same component structure and the same styles</p>
            </div>
            <p className="fourthSection">
                Hover over every section to make something happen. That was added just to put some more css code.
            </p>
        </div>
    );
  }
  
  export default ScssExample;
  