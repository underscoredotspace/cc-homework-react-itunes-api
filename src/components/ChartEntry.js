import React from 'react'

const ChartEntry = props => {
  if (!props.entry) {
    return null
  }

  const entry = props.entry
  return (
    <li className="chart-entry">
      <img
        className="chart-entry__cover"
        src={entry.img}
        alt={`Cover of ${entry.title} by ${entry.artist}`}
      />
      <div className="chart-entry__position">{entry.position}</div>
      <div className="chart-entry__artist">{entry.artist}</div>
      <div className="chart-entry__title">{entry.title}</div>
    </li>
  )
}

export default ChartEntry
