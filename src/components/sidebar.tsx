import { Home, AlertTriangle, List, User, LogOut } from 'lucide-react';
import logo from '../assets/images/PMVC Logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#0047AB] flex flex-col justify-between">
      <div>
        <div className="bg-white">
          <div className="text-center font-extrabold text-2xl flex justify-center items-center">
            <img src={logo} className='w-24' alt="" />
          </div>
        </div>
        <nav className="flex flex-col gap-5 px-6 pt-8">
          <a href="#" className="flex items-center gap-3 text-white font-bold hover:text-[#FFCC00]">
            <Home size={22} /> HOME
          </a>
          <Link to={'/abrirChamado'} className="flex items-center gap-3 text-white font-bold hover:text-[#FFCC00]">
            <AlertTriangle size={22} /> ABRIR CHAMADO
          </Link>
          <Link to={'/meusChamados'} className="flex items-center gap-3 text-white font-bold hover:text-[#FFCC00]">
            <List size={22} /> MEUS CHAMADOS
          </Link>
          <a href="#" className="flex items-center gap-3 text-white font-bold hover:text-[#FFCC00]">
            <User size={22} /> MINHA CONTA
          </a>
          <a href="#" className="flex items-center mt-24 gap-2 text-red-600 font-bold hover:text-red-800 mb-4">
          <LogOut size={20} /> SAIR
          </a>
        </nav>
      </div>
    </aside>
  );
}