import Layout from '../components/layout';
import React from 'react';
import { useState } from 'react';

export default function AbrirChamado() {

        const [nome, setNome] = useState("");
        const [setorOrigem, setSetorOrigem] = useState("");
        const [descricao, setDescricao] = useState("");

        const setores = ["RH", "SEF", "SENJ", "SEA", "PAT"];

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log({ nome, setorOrigem, descricao });
            // aqui você pode enviar via fetch/axios
        };

  return (
    <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded shadow-md w-full max-w-2xl">
            <h1 className="text-2xl font-bold text-center mb-8">Abrir Chamado</h1>

            <label className="block mb-2 font-semibold">Nome</label>
            <input
          className="w-full mb-4 p-2 border rounded"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label className="block mb-2 font-semibold">Setor que trabalha</label>
        <select
          className="w-full mb-4 p-2 border rounded"
          value={setorOrigem}
          onChange={(e) => setSetorOrigem(e.target.value)}
          required
        >
          <option value="" disabled>Selecione</option>
          {setores.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold">Setor de destino</label>
        <select
            className="w-full mb-4 p-2 border rounded bg-gray-100 text-gray-600 cursor-not-allowed"
            value="TI"
            disabled
            >
            <option value="TI">TI</option>
        </select>

        <label className="block mb-2 font-semibold">Descrição</label>
        <textarea
          className="w-full mb-6 p-2 border rounded"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
        >
          ABRIR CHAMADO
        </button>
      </form>
    </div>
    </Layout>
  );
}