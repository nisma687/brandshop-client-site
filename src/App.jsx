
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      <Navbar />
      <h1 className='text-4xl font-semibold'>Entertainment and Media</h1>
      <Outlet />
    </>
  )
}

export default App
