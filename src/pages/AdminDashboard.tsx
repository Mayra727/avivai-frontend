import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

export default function AdminDashboard() {
  // ===== DADOS FINANCEIROS REAIS =====

  const vendas = [
    { id: 1, aluno: "Maria Silva", valor: 297, taxa: 29.7, afiliado: 0, reembolso: false },
    { id: 2, aluno: "João Pereira", valor: 197, taxa: 19.7, afiliado: 0, reembolso: false },
    { id: 3, aluno: "Ana Costa", valor: 297, taxa: 29.7, afiliado: 0, reembolso: true },
    { id: 4, aluno: "Carlos Lima", valor: 497, taxa: 49.7, afiliado: 0, reembolso: false },
  ];

  const faturamentoMensal = [
    { mes: "Jan", valor: 2500 },
    { mes: "Fev", valor: 4200 },
    { mes: "Mar", valor: 6100 },
    { mes: "Abr", valor: 5300 },
    { mes: "Mai", valor: 8900 },
    { mes: "Jun", valor: 7200 },
  ];

  const alunosMensal = [
    { mes: "Jan", alunos: 20 },
    { mes: "Fev", alunos: 35 },
    { mes: "Mar", alunos: 50 },
    { mes: "Abr", alunos: 70 },
    { mes: "Mai", alunos: 95 },
    { mes: "Jun", alunos: 128 },
  ];

  // ===== CÁLCULOS REAIS =====

  const receitaBruta = vendas.reduce((acc, v) => acc + v.valor, 0);

  const totalTaxas = vendas.reduce((acc, v) => acc + v.taxa, 0);

  const totalReembolsos = vendas
    .filter((v) => v.reembolso)
    .reduce((acc, v) => acc + v.valor, 0);

  const receitaLiquida = receitaBruta - totalTaxas - totalReembolsos;

  return (
    <div style={{ padding: "40px", background: "#F8F5F1", minHeight: "100vh" }}>
      <h1 style={{ color: "#5A3A2C", marginBottom: "30px" }}>
        💰 Controle Financeiro - Admin
      </h1>

      {/* RESUMO FINANCEIRO */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <Card titulo="Receita Bruta" valor={`R$ ${receitaBruta.toFixed(2)}`} />
        <Card titulo="Taxas da Plataforma" valor={`R$ ${totalTaxas.toFixed(2)}`} />
        <Card titulo="Reembolsos" valor={`R$ ${totalReembolsos.toFixed(2)}`} />
        <Card titulo="Receita Líquida" valor={`R$ ${receitaLiquida.toFixed(2)}`} />
      </div>

      {/* GRÁFICO DE FATURAMENTO */}
      <h2 style={{ marginBottom: "15px" }}>📊 Faturamento Mensal</h2>
      <div style={{ width: "100%", height: 300, marginBottom: "50px" }}>
        <ResponsiveContainer>
          <BarChart data={faturamentoMensal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" fill="#5A3A2C" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* GRÁFICO DE ALUNOS */}
      <h2 style={{ marginBottom: "15px" }}>📈 Crescimento de Alunos</h2>
      <div style={{ width: "100%", height: 300, marginBottom: "50px" }}>
        <ResponsiveContainer>
          <LineChart data={alunosMensal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="alunos" stroke="#B3542D" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TABELA DETALHADA */}
      <h2 style={{ marginBottom: "15px" }}>📋 Vendas Detalhadas</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>
          <tr style={{ background: "#EEE" }}>
            <th style={th}>Aluno</th>
            <th style={th}>Valor</th>
            <th style={th}>Taxa</th>
            <th style={th}>Reembolso</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((v) => (
            <tr key={v.id}>
              <td style={td}>{v.aluno}</td>
              <td style={td}>R$ {v.valor}</td>
              <td style={td}>R$ {v.taxa}</td>
              <td style={td}>{v.reembolso ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Card({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <div
      style={{
        flex: 1,
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#777" }}>{titulo}</p>
      <h2 style={{ color: "#5A3A2C" }}>{valor}</h2>
    </div>
  );
}

const th = {
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "1px solid #ddd",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};