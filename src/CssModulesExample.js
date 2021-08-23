import cssModulesLogo from './img/css-modules-logo.png'
import questionMark from './img/question-mark.png'
import lightBulb from './img/light-bulb.jpg'

import styles from './styles.module.css'

function CssModulesExample() {
    return (
        <div className={styles.testWrapper}>
            <div className={styles.firstSection}>
                <img src={cssModulesLogo} className={styles.image} alt="method img" />
                <p className={styles.methodDescription}>This is a test paragraph for CSS modules approach.</p>
            </div>
            <div className={styles.secondSection}>
                <img src={questionMark} className={styles.image} alt="question mark" />
                <p className={styles.performanceDescription}>Let's decide which method has better performance in profiler</p>
            </div>
            <div className={styles.thirdSection}>
                <img src={lightBulb} className={styles.image} alt="question mark" />
                <p className={styles.generalDescription}>Every method will have the same component structure and the same styles</p>
            </div>
            <p className={styles.fourthSection}>
                Hover over every section to make something happen. That was added just to put some more css code.
            </p>
        </div>
    );
  }
  
  export default CssModulesExample;
  