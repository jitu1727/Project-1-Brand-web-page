import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>


<Navbar/>
<Header/>


    </div>
    







     
    </>
  )
}

export default App
