import '../index.css';
import logo from '../assets/images/PMVC Logo.png';
import pmv from '../assets/images/Logo Votorantim.png';
import { useState } from 'react';



export default function Cadastro() {

    const [cpf, setCpf] = useState('');

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    value = value.replace(/\D/g, ''); // remove tudo que não for número

    value = value
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // 12345678900 → 123.456.789-00

    setCpf(value);
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0062A4] to-[#004A7B]">
        <div className="bg-white p-6  rounded-2xl shadow-2xl w-full max-w-xl">
        <img src={logo} alt="Logo PMVC" className="mx-auto w-36 -mt-6 -mb-3" />
            <form className="flex flex-col gap-4">
                <div className='flex gap-2'>
            <input
                type="text"
                placeholder="MATRICULA"
                className="bg-gray-200 flex-1 border font-koulen text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="date"
                placeholder="DATA DE NASCIMENTO"
                className="bg-gray-200 flex-1 border font-koulen text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-black"
            />
            </div>
            <input
                type="text"
                placeholder="NOME"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="SENHA"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
            />
            
            
            <button
                type="submit"
                className="bg-[#004A7B] text-white py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
                Entrar
            </button>
            </form>
        </div>

        <div className="fixed p-5 bottom-4 left-4 flex items-center gap-2 text-white text-md">
        <img src={pmv} alt="Brasão de Votorantim" className="w-12 h-auto" />
        <span className="uppercase tracking-wide">Prefeitura de Votorantim</span>
</div>

        </div>

    );
    }