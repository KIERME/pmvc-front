import '../index.css';
import logo from '../assets/images/PMVC Logo.png';
import pmv from '../assets/images/Logo Votorantim.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Home() {

    //MATRICULA APENAS NUMEROS
        const [matricula, setMatricula] = useState('');
    
        const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/\D/g, ''); // remove tudo que não for dígito
            setMatricula(value);
            };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0062A4] to-[#004A7B]">
        <div className="bg-white p-6  rounded-2xl shadow-2xl w-full max-w-lg">
        <img src={logo} alt="Logo PMVC" className="mx-auto w-36 -mt-6 -mb-3" />
            <form className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="MATRICULA"
                inputMode="numeric"
                value={matricula}
                onChange={handleMatriculaChange}
                maxLength={5}
                className="bg-gray-200 border font-koulen text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="SENHA"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-[#004A7B] text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
                Entrar
            </button>
            </form>

            <div className="mt-12 text-lg text-[#004A7B] text-center">
                AINDA NAO TEM CONTA? <br />
            <Link to='/Cadastro' className="hover:underline">CADASTRE-SE</Link>
            </div>
        </div>

        <div className="fixed p-5 bottom-4 left-4 flex items-center gap-2 text-white text-md">
        <img src={pmv} alt="Brasão de Votorantim" className="w-12 h-auto" />
        <span className="uppercase tracking-wide">Prefeitura de Votorantim</span>
</div>

        </div>

    );
    }