/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CssModulesCaseView from './cssModules/CaseView'
import ScssCaseView from './scss/CaseView'
import StyledComponentsCaseView from './styledComponents/CaseView'

function App() {
  const [isModulesApproachVisible, setIsModulesApproachVisible] = useState(false);
  const [isStyledComponentsApproachVisible, setIsStyledComponentsApproachVisible] = useState(false)
  const [isScssApproachVisible, setIsScssApproachVisible] = useState(false)

  return (
    <>
      <button onClick={() => {setIsModulesApproachVisible(true); setIsStyledComponentsApproachVisible(false); setIsScssApproachVisible(false)}}>CSS MODULES</button>
      <button onClick={() => {setIsStyledComponentsApproachVisible(true); setIsModulesApproachVisible(false); setIsScssApproachVisible(false)}}>Styled Components</button>
      <button onClick={() => {setIsStyledComponentsApproachVisible(false); setIsModulesApproachVisible(false); setIsScssApproachVisible(true)}}>SCSS</button>
      {isModulesApproachVisible && <CssModulesCaseView />}
      {isStyledComponentsApproachVisible && <StyledComponentsCaseView />}
      {isScssApproachVisible && <ScssCaseView />}
    </>
  );
}

export default App;
