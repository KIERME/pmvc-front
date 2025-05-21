import '../index.css';
import logo from '../assets/images/PMVC Logo.png';
import pmv from '../assets/images/Logo Votorantim.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {

    //AQUISIÇÃO DOS DADOS
        const [matricula, setMatricula] = useState('');
    
        const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/\D/g, ''); // remove tudo que não for dígito
            setMatricula(value);
        };

        const [senha, setSenha] = useState('');
        
        const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                setSenha(e.target.value)
        }
    //AQUISIÇÃO DOS DADOS
    
    
        const [erro, setErro] = useState("");
        const navigate = useNavigate();

        const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                try {
                    const response = await fetch("http://localhost:8080/api/auth/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ matricula, senha })
                    });

                    const resJson = await response.json();
                    console.log("Login aprovado!", resJson);
                    localStorage.setItem("token", resJson.token);
                    localStorage.setItem("tipoUsuario", resJson.tipoUsuario);

                    if (response.ok) {
                        // Login aprovado!
                        navigate("/meusChamados");
                    } else if (response.status === 500) {
                        // Login inválido
                        setErro("Senha incorreta.");
                    } else {
                        // Outro erro inesperado
                        setErro("Erro inesperado.");
                    }
                    } catch (error) {
                    setErro("Erro de conexão com o servidor.");
                    console.error("Erro na requisição:", error);
                    }

        }
            
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0062A4] to-[#004A7B]">
        <div className="bg-white p-6  rounded-2xl shadow-2xl w-full max-w-lg">
        <img src={logo} alt="Logo PMVC" className="mx-auto w-36 -mt-6 -mb-3" />
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
                value={senha}
                onChange={handleSenhaChange}
                placeholder="SENHA"
                className="bg-gray-200 border text-center border-gray-300 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

             {erro && <p className='mx-auto' style={{ color: "red" }}>{erro}</p>}

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

        <div className="fixed p-5 bottom-4 flex items-center gap-2 text-white text-md">
        <img src={pmv} alt="Brasão de Votorantim" className="w-12 h-auto" />
        <span className="uppercase tracking-wide">Prefeitura de Votorantim</span>
</div>

        </div>

    );
    }