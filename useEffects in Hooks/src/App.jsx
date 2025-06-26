import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const[first,setFirst]=useState(0)

  // useEffect(() => {
  //   alert("Welcome to this world")
  // }, [])

  // useEffect(() => {
  //   alert("Count was changed")
  // }, [count])

  // useEffect(() => {
  //   alert("First was changed")
  // }, [first])

  // Case 1: Run on every render
  useEffect(() => {
    alert("Hey I will render on evry page")   
    
  })

  // Case 2: Run only on first render

  useEffect(() => {
    alert("Hey I will render on first page")
    
  }, [])

  // Case 3: Run only when certain Value changes
  useEffect(() => {
    
    alert("Color was changed")
  }, [color])
  

  
  

  return (
    <>
    <Navbar color={"cyan"+"blue"}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
