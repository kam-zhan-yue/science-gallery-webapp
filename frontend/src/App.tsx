import Main from "./components/Main.tsx";
import {GameProvider} from "./contexts/GameContext.tsx";
import './firebaseConfig.ts'

function App() {
  return (
    <>
    <div id='app'>

      <GameProvider>
        <Main />
      </GameProvider>
    </div>
    </>
  )
}

export default App
