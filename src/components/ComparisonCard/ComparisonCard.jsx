import './ComparisonCard.css'

function ComparisonCard({ title, value, percentage, isPositive }) {
  const comparisonLabel = isPositive
    ? 'Acima do mês anterior'
    : 'Abaixo do mês anterior'

  return (
    <article className="comparison-card">
      <p className="comparison-card__title">{title}</p>
      <p className="comparison-card__value">{value}</p>
      <div className={`comparison-card__comparison ${isPositive ? 'is-positive' : 'is-negative'}`}>
        <span className="comparison-card__percentage">
          {isPositive ? '+' : '-'}{percentage}%
        </span>
        <span>{comparisonLabel}</span>
      </div>
    </article>
  )
}

export default ComparisonCard
