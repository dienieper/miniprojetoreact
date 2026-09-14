import ComparisonCard from "./components/ComparisonCard/ComparisonCard";
import "./App.css";

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="eyebrow">Visão geral</p>
        <h1>Indicadores do mês</h1>
        <p className="subtitle">
          Acompanhe o desempenho comparado ao período anterior.
        </p>
      </header>

      <section className="cards-grid" aria-label="Indicadores mensais">
        <ComparisonCard
          title="Receita total"
          value="R$ 48.250"
          percentage={12.4}
          isPositive
        />
        <ComparisonCard
          title="Novos clientes"
          value="186"
          percentage={8.1}
          isPositive={false}
        />
      </section>
    </main>
  );
}

export default App;
