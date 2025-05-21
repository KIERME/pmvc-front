import { useEffect, useState } from "react"
import Layout from "../components/layout"

type Chamado = {
  protocolo: string
  nome: string
  status: string
}

export default function ListaChamados() {
  const [chamados, setChamados] = useState<Chamado[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchChamados() {
      try {
        const response = await fetch("http://localhost:8080/api/chamados/meus")
        if (!response.ok) throw new Error("Erro ao buscar chamados")
        const data = await response.json()
        setChamados(data)
      } catch (error) {
        console.error("Erro:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChamados()
  }, [])

  if (isLoading) return <p>Carregando chamados...</p>

  return (
    <Layout>
    <div>
      <h2>Meus Chamados</h2>
      <ul>
        {chamados.map((chamado, index) => (
          <li key={index}>
            <strong>Protocolo:</strong> {chamado.protocolo} — <strong>Nome:</strong> {chamado.nome} — <strong>Status:</strong> {chamado.status}
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  )
}