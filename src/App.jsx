import './App.css';
import Box from "./components/box/Box.jsx"
import TextContainer from "./components/text/Text.jsx"
import IconCalculator from "./assets/icon-calculator.svg"
import IconKarma from "./assets/icon-karma.svg"
import IconSupervisor from "./assets/icon-supervisor.svg"
import IconTeamBuilder from "./assets/icon-team-builder.svg"


function App() {
  return (
    <>
      <TextContainer />
      <div className="cards">
        <div className="column">
          <Box
            borderColor={"#44D3D2"}
            h3Text={"Supervisor"}
            text={'Monitors activity to identify project roadblocks'}
            image={IconSupervisor} />
        </div>
        <div className="column">
          <Box
            borderColor={"#EA5454"}
            h3Text={"Team Builder"}
            text={'Scans our talent network to create the optimal team for your project'}
            image={IconTeamBuilder} />
          <Box
            borderColor={"#FCAE4A"}
            h3Text={"Karma"}
            text={'Regularly evaluates our talent to ensure quality'}
            image={IconKarma} />
        </div>
        <div className="column">
          <Box
            borderColor={"#549EF2"}
            h3Text={"Calculator"}
            text={'Uses data from past projects to provide better delivery estimates'}
            image={IconCalculator} />
        </div>
      </div>
    </>
  )
}

export default App;
