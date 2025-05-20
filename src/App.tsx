import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro'
import Login from './pages/Login';
import AbrirChamado from './pages/abrirChamado';
import MeusChamados from './pages/meusChamados'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/abrirChamado" element={<AbrirChamado />} />
        <Route path="/meusChamados" element={<MeusChamados />} />
      </Routes>
    </Router>
  );
}