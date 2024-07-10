import Main from "./components/Main.tsx";
import StatisticsComponent from "./components/StatisticsComponent.tsx";
import {GameProvider} from "./contexts/GameContext.tsx";
import './firebaseConfig.ts'

function App() {
  return (
    <>
    <div id='app'>

      <GameProvider>
        <Main />
        <StatisticsComponent />
      </GameProvider>
    </div>
    </>
  )
}

export default App
