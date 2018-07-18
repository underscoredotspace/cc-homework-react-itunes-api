import React, { Fragment } from 'react'
import ChartEntry from './ChartEntry'

export default function ChartList(props) {
  if (!props.chart) {
    return null
  }

  return (
    <Fragment>
      <h1>Chart List</h1>
      <ul className="chart-list">
        {props.chart.map((entry, index) => (
          <ChartEntry key={`chart-entry-${index}`} entry={entry} />
        ))}
      </ul>
    </Fragment>
  )
}
