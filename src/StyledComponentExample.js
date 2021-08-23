import styledComponentsLogo from './img/styled-components.png'
import questionMark from './img/question-mark.png'
import lightBulb from './img/light-bulb.jpg'

import styled from 'styled-components'

const TestWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 5% auto;
    border: 5px solid red;
    justify-content: space-around;
    align-items: center;
`

const Image = styled.img`
    width: 300px;
    height: auto;
`

const MethodDescription = styled.p`
    color: red;
`

const PerformanceDescription = styled.p`
    color: blue;
`

const GeneralDescription = styled.p`
    color: blue;
`

const Section = styled.div`
    height: 400px;
    width: 400px;
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease-in-out;
`

const FirstSection = styled(Section)`
    &:hover {
        transform: scale(2);
    }
`
const SecondSection = styled(Section)`
    &:hover {
        transform: rotate(180deg);
    }
`
const ThirdSection = styled(Section)`
    &:hover {
        transform: translate(50%, 50%);
    }
`
const FourthSection = styled(Section)`
    &:hover {
        font-size: 40px;
    }
`

function StyledComponentExample() {
    return (
        <TestWrapper>
            <FirstSection>
                <Image src={styledComponentsLogo} alt="method img" />
                <MethodDescription>This is a test paragraph for styled components approach.</MethodDescription>
            </FirstSection>
            <SecondSection>
                <Image src={questionMark} alt="question mark" />
                <PerformanceDescription>Let's decide which method has better performance in profiler</PerformanceDescription>
            </SecondSection>
            <ThirdSection>
                <Image src={lightBulb}  alt="question mark" />
                <GeneralDescription>Every method will have the same component structure and the same styles</GeneralDescription>
            </ThirdSection>
            <FourthSection>
                Hover over every section to make something happen. That was added just to put some more css code.
            </FourthSection>
        </TestWrapper>
    );
  }
  
  export default StyledComponentExample;
  