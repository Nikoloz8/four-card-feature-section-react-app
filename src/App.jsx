import './App.css';
import Box from "./components/box/Box.jsx"
import TextContainer from "./components/text/Text.jsx"
import IconCalculator from "../../four-card-feature-section - react/src/assets/icon-calculator.svg"
import IconKarma from "../../four-card-feature-section - react/src/assets/icon-karma.svg"
import IconSupervisor from "../../four-card-feature-section - react/src/assets/icon-supervisor.svg"
import IconTeamBuilder from "../../four-card-feature-section - react/src/assets/icon-team-builder.svg"


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
            borderColor={"#44D3D2"}
            h3Text={"Supervisor"}
            text={'Monitors activity to identify project roadblocks'}
            image={IconTeamBuilder} />
          <Box
            borderColor={"#44D3D2"}
            h3Text={"Supervisor"}
            text={'Monitors activity to identify project roadblocks'}
            image={IconKarma} />
        </div>
        <div className="column">
          <Box
            borderColor={"#44D3D2"}
            h3Text={"Supervisor"}
            text={'Monitors activity to identify project roadblocks'}
            image={IconCalculator} />
        </div>
      </div>
    </>
  )
}

export default App;
