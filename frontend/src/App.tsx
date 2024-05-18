import Game from './game/Game.tsx'
import styled from  'styled-components'
import DialoguePopup from './ui/DialoguePopup.tsx'
import StoryComponent from './components/StoryComponent.tsx'

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
      <DialoguePopup/>
      <StoryComponent />
    </div>
    </>
  )
}

export default App
