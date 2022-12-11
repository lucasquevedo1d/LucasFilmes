import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Movies from "../pages/Movies/Movies"
import Search from "../pages/Search/Search"

const Router = () =>{
    return(
        
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/movie/:id" element={<Movies/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
        
    )
}

export default Router