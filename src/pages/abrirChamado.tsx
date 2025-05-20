import Layout from '../components/layout';
import React from 'react';
import { useState } from 'react';

type createChamadoFormProps = {
  nome: string
  setorOrigem: string
  descricao: string
  setorDestino: string
}

export default function AbrirChamado() {
  const [formData, setFormData] = useState<createChamadoFormProps>({
    nome: '',
    descricao: '',
    setorOrigem: '',
    setorDestino: '',
  })

  const setores = ["RH", "SEF", "SENJ", "SEA", "PAT"];

  const handleFormUpdate = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData)
  };

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
            name="setorOrigem"
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
              className="w-full mb-4 p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed"
              onChange={(e) => handleFormUpdate(e.target.value, e.target.name)}
              disabled
              >
              <option value="TI">TI</option>
          </select>

          <label className="block mb-2 font-semibold">Descrição</label>
          <textarea
            name="descricao"
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