import Game from './game/Game.tsx'
import styled from  'styled-components'

const RedScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <>
    <div id='app'>
      <Game/>
    </div>
    </>
  )
}

export default App
