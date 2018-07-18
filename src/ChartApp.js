import React, { Component, Fragment } from 'react'
import ChartList from './components/ChartList'

export default class ChartApp extends Component {
  constructor(props) {
    super(props)

    this.state = { chart: [] }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(res => {
        const chart = res.feed.entry.map((song, index) => ({
          position: index + 1,
          artist: song['im:artist'].label,
          title: song['im:name'].label,
          img: song['im:image'][2].label
        }))

        this.setState({ chart })
      })
      .catch(console.error)
  }

  render() {
    return (
      <Fragment>
        <ChartList chart={this.state.chart} />
      </Fragment>
    )
  }
}
