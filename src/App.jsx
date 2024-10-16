import Navbar from "./Components/Navbar/Navbar"
import PriceOptions from "./Components/PriceOptions/PriceOptions"

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>

        <h1 className='text-7xl'>Vite + React</h1>
        <PriceOptions></PriceOptions>
      </div>
    </>
  )
}

export default App
