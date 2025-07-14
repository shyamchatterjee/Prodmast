import { useContext } from 'react'
import './App.css'
import Home from './Home/home'
import Navbar from './Navbar/navbar'
import { Context } from '../Context/context'
import About from './About/about'
let App = ()=>{
     let {bool,setBool} = useContext(Context)
    return <> <div  className='div flex flex-col items-center gap-10 '>
       <Navbar/>
       <Home/>
       <About/>
    </div>
           
    </>
}
export default App