import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import IndexLayout from './layouts/IndexLayout'
import Skills from './view/Skills'
import Education from './view/Education'
import Projects from './view/Projects'
import Contact from './view/Contact'
import Welcome from './components/Welcome'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<IndexLayout />}>
                    <Route path='/' element={<Welcome />} index />
                    <Route path='/inicio' element={<Home />} />
                    <Route path='/habilidades' element={<Skills />} />
                    <Route path='/educacion' element={<Education />} />
                    <Route path='/proyectos' element={<Projects />} />
                    <Route path='/contacto' element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
