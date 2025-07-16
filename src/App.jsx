import { useContext } from 'react'
import './App.css'
import Home from './Home/home'
import Navbar from './Navbar/navbar'
import { Context } from '../Context/context'
import About from './About/about'
import Service from './Service/service'
import Contect from './Contect/contect'
import Form from './Form/form'
let App = ()=>{
     
    return <> <div  className=' div flex flex-col items-center  '>
        
       <Navbar />
       <Home/>
       <Form/>
       <About/>
       <Service/>
       <Contect/>
       
    </div>
           
    </>
}
export default App