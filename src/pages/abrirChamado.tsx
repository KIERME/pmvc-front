import Layout from '../components/layout';
import React from 'react';
import { useState } from 'react';
import { useToast } from "../hooks/use-toast"


  type createChamadoFormProps = {
    nome: string
    setorTrabalha: string
    motivoAbertura: string
    setorDestino: string
  }

  export default function AbrirChamado() {
    const { toast } = useToast()
    const [formData, setFormData] = useState<createChamadoFormProps>({
      nome: '',
      motivoAbertura: '',
      setorTrabalha: '',
      setorDestino: 'TI',
    })

  const setores = ["RH", "SEF", "SENJ", "SEA", "PAT"];

  const handleFormUpdate = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/api/chamados/novo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(formData),
      })
      if (response.ok){

          const data = await response.json()

          toast({
          title: "CHAMADO ABERTO!",
          description: `Protocolo: ${data.protocolo}`,
        })
      }
  }

  

  return (
    <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-center mb-8">Abrir Chamado</h1>

            <label className="block mb-2 font-semibold">Nome</label>
            <input
              name="nome"
              className="w-full mb-4 p-2 border rounded"
              onChange={(e) => handleFormUpdate(e.target.value, e.target.name)}
              required
            />

          <label className="block mb-2 font-semibold">Setor que trabalha</label>
          <select
            name="setorTrabalha"
            value={formData.setorTrabalha}
            className="w-full mb-4 p-2 border rounded pr-4"
            onChange={(e) => handleFormUpdate(e.target.value, e.target.name)}
            required
          >
            <option value="" disabled>Selecione</option>
            {setores.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <label className="block mb-2 font-semibold">Setor de destino</label>
          <select
              name='setorDestino'
              value={formData.setorDestino}
              className="w-full mb-4 p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed"
              onChange={(e) => handleFormUpdate(e.target.value, e.target.name)}
              disabled
              >
              <option value="TI">TI</option>
          </select>

          <label className="block mb-2 font-semibold">Descrição</label>
          <textarea
            name="motivoAbertura"
            value={formData.motivoAbertura}
            className="w-full mb-6 p-2 border rounded"
            onChange={(e) => handleFormUpdate(e.target.value, e.target.name)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#0047AB] hover:bg-blue-600 text-white py-2 rounded font-semibold"
          >
            ABRIR CHAMADO
          </button>
      </form>
    </div>
    </Layout>
  );
}