import LineChart from "./Components/LineChart/LineChart"
import Navbar from "./Components/Navbar/Navbar"
import Phones from "./Components/Phones/Phones"
import PriceOptions from "./Components/PriceOptions/PriceOptions"

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>

        <h1 className='text-7xl'>Vite + React</h1>
        <PriceOptions></PriceOptions>
        <LineChart />
        <Phones />
      </div>
    </>
  )
}

export default App
