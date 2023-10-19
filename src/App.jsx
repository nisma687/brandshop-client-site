
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


function App() {
 

  return (
    <div className='mx-auto md:max-w-7xl'>
      <Navbar />
      <h1 className='text-4xl font-semibold'>Entertainment and Media</h1>
      <Outlet />
   
    </div>
    
  )
}

export default App
