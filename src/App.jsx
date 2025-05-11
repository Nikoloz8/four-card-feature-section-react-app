import './App.css';
import Box from "./components/box/Box.jsx"
import TextContainer from "./components/text/Text.jsx"


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
            image={"/images/icon-supervisor.svg"} />
        </div>
        <div className="column">
          <Box
            borderColor={"#EA5454"}
            h3Text={"Team Builder"}
            text={'Scans our talent network to create the optimal team for your project'}
            image={"/images/icon-team-builder.svg"} />
          <Box
            borderColor={"#FCAE4A"}
            h3Text={"Karma"}
            text={'Regularly evaluates our talent to ensure quality'}
            image={"/images/icon-karma.svg"} />
        </div>
        <div className="column">
          <Box
            borderColor={"#549EF2"}
            h3Text={"Calculator"}
            text={'Uses data from past projects to provide better delivery estimates'}
            image={"/images/icon-calculator.svg"} />
        </div>
      </div>
    </>
  )
}

export default App;
