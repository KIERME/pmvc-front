import '../index.css';
import logo from '../assets/images/PMVC Logo.png';
import pmv from '../assets/images/Logo Votorantim.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cadastro() {

    //MATRICULA APENAS NUMEROS
    const [matricula, setMatricula] = useState('');

    const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // remove tudo que não for dígito
        setMatricula(value);
        };

    //MÁSCARA DATA DE NASCIMENTO
    const [dataNascimento, setDataNascimento] = useState('');

    const handleDataNascimentoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        value = value.replace(/\D/g, ''); //remove letras

        
        if (value.length <= 4) {
            value = value.replace(/(\d{2})(\d+)/, '$1/$2');
        } else if (value.length <= 6) {
            value = value.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
        } else {
            value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
        }

        setDataNascimento(value);
    };

    //MÁSCARA TELEFONE
    const [telefone, setTelefone] = useState('');

    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ''); // remove tudo que não for número

        if (value.length <= 2) {
            value = value.replace(/(\d{0,2})/, '($1');
        } else if (value.length <= 7) {
            value = value.replace(/(\d{2})(\d+)/, '($1)$2');
        } else if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1)$2-$3');
        } else {
            value = value.slice(0, 11); // limita a 11 dígitos
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
        }

        setTelefone(value);
        };


    // MÁSCARA CPF
    const [cpf, setCpf] = useState('');

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        value = value.replace(/\D/g, ''); //remove letras
        
        if (value.length <= 6) {
            value = value.replace(/(\d{3})(\d+)/, '$1.$2');
        } else if (value.length <= 9) {
            value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
        } else {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }

        setCpf(value);
    };

    //AQUISIÇÃO DOS DADOS
    const [nome, setNome] = useState('');

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value)
    }

    const [senha, setSenha] = useState('');

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value)
    }

    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleconfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarSenha(e.target.value)
    }
    
    const handleCadastro = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/api/cadastro', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({matricula, nome, cpf, telefone, dataNascimento, senha, confirmarSenha})
        })
        const resJSON = await response.json()
        console.log(resJSON)
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0062A4] to-[#004A7B]">
        <div className="bg-white p-6  rounded-2xl shadow-2xl w-full max-w-xl">        
            <img src={logo} alt="Logo PMVC" className="mx-auto w-36 -mt-6 -mb-3" />
            <form className="flex flex-col gap-4" onSubmit={handleCadastro}>
                <div className='flex gap-2'>
            <input
                type="text"
                placeholder="MATRICULA"
                inputMode="numeric"
                value={matricula}
                onChange={handleMatriculaChange}
                maxLength={5}
                className="bg-gray-200 flex-1 border font-koulen text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                inputMode="numeric"
                value={dataNascimento}
                onChange={handleDataNascimentoChange}
                maxLength={10}
                placeholder="DATA DE NASCIMENTO"
                className="bg-gray-200 flex-1 border font-koulen text-black placeholder:text-gray-400 text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
                    <div className='flex gap-2'>
            <input
                type="text"
                placeholder="TELEFONE"
                inputMode="numeric"
                maxLength={15}
                value={telefone}
                onChange={handleTelefoneChange}
                className="bg-gray-200 flex-1 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                inputMode="numeric"
                placeholder="CPF"
                value={cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className="bg-gray-200 border text-center flex-1 border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                    </div>
            <input
                type="text"
                value={nome}
                onChange={handleNomeChange}
                placeholder="NOME COMPLETO"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                placeholder="SENHA"
                value={senha}
                onChange={handleSenhaChange}
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                value={confirmarSenha}
                onChange={handleconfirmarSenhaChange}
                placeholder="CONFIRMAR SENHA"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
                type="submit"
                className="bg-[#004A7B] text-white py-2 rounded-xl hover:bg-blue-700 transition-all mb-4"
            >
                CADASTRAR
            </button>
            </form>

            <div className="text-lg text-[#004A7B] text-center">
                    <Link to='/' className="hover:underline">VOLTAR AO LOGIN</Link>
            </div>
        </div>

        <div className="fixed p-5 bottom-4 left-4 flex items-center gap-2 text-white text-md">
        <img src={pmv} alt="Brasão de Votorantim" className="w-12 h-auto" />
        <span className="uppercase tracking-wide">Prefeitura de Votorantim</span>
</div>

        </div>

    );
    }