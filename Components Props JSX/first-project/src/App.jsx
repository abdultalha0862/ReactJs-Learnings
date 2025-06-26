import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {
  

  return (
    <>
      <Navbar/>
      <Card title="card-1" desc="Desc 1"/>
      <Card title="card-2" desc="Desc 2"/>
      <Card title="card-3" desc="Desc 3"/>
      <Card title="card-4" desc="Desc 4"/>
      <Footer/>
    </>
  )
}

export default App
