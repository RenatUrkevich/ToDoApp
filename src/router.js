import {Routes, Route , Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export const useRoutes = () =>{
    return(
        <Routes>
            <Route path= '/' element ={<Home/>}/>
            <Route path= '/about' element ={<About/>}/>
            <Route path= "*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}