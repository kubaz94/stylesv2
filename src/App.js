import { useState } from 'react';
import CssModulesExample from './CssModulesExample'
import StyledComponentExample from './StyledComponentExample'
import ScssExample from './ScssExample'

function App() {
  const [isModulesApproachVisible, setIsModulesApproachVisible] = useState(false);
  const [isStyledComponentsApproachVisible, setIsStyledComponentsApproachVisible] = useState(false)
  const [isScssApproachVisible, setIsScssApproachVisible] = useState(false)

  const renderCssModulesExample = () => {
      let value = [];
      for (let i = 0; i < 500; i++) {
          value.push(<CssModulesExample />);
      }
      return value;
  }

  const renderStyledComponentsExample = () => {
    let value = [];
      for (let i = 0; i < 500; i++) {
          value.push(<StyledComponentExample />);
      }
      return value;
  }

  const renderScssExample = () => {
    let value = [];
      for (let i = 0; i < 500; i++) {
          value.push(<ScssExample />);
      }
      return value;
  }

  return (
    <>
      <button onClick={() => {setIsModulesApproachVisible(true); setIsStyledComponentsApproachVisible(false); setIsScssApproachVisible(false)}}>CSS MODULES</button>
      <button onClick={() => {setIsStyledComponentsApproachVisible(true); setIsModulesApproachVisible(false); setIsScssApproachVisible(false)}}>Styled Components</button>
      <button onClick={() => {setIsStyledComponentsApproachVisible(false); setIsModulesApproachVisible(false); setIsScssApproachVisible(true)}}>SCSS</button>
      {isModulesApproachVisible && renderCssModulesExample()}
      {isStyledComponentsApproachVisible && renderStyledComponentsExample()}
      {isScssApproachVisible && renderScssExample()}
    </>
  );
}

export default App;
