import { useContext } from 'react'
import './App.css'
import Home from './Home/home'
import Navbar from './Navbar/navbar'
import { Context } from '../Context/context'
import About from './About/about'
import Service from './Service/service'
let App = ()=>{
     
    return <> <div  className=' div flex flex-col items-center gap-10 '>
       <Navbar/>
       <Home/>
       <About/>
       <Service/>
    </div>
           
    </>
}
export default App