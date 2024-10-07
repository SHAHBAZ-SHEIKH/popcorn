import Home from "./components/Home"
import MyState from "./components/context/MyState"

function App() {
  

  return (
    <MyState>
        <Home />
    </MyState>
      
  )
}

export default App
