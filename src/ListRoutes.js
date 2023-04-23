import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FicheLogement from './pages/FicheLogement/FicheLogement'


function ListRoutes() {
    return (
        <div className='ListRoutes'>
            <Header />
            <main>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='*' element={<Error/>}/>
                        <Route path='/logement/:id' element={<FicheLogement/>}/>
                    </Routes>
            </main>
            <Footer />
        </div>   
    )
}

export default ListRoutes