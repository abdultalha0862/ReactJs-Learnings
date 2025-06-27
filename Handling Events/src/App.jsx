import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("King")
  const[form,setForm]=useState({email:"",password:""})

  const handleClick = () => {
    alert("Button is clicked")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form);
    
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='password' value={form.password?form.password:""} onChange={handleChange} />
    </>
  )
}

export default App
