import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { SelectiveProcess } from '../Pages/SelectiveProcess/SelectiveProcess'
import { Projects } from '../Pages/Projects/Projects'
import { ServicesPage } from '../Pages/Services/Services'
import { Events } from '../Pages/Events/Events'
import { Contact } from '../Pages/Contact/Contact'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processos-seletivos" element={<SelectiveProcess />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
