import React, { Component } from 'react'
import { render } from 'react-dom'
import YTSearch from 'youtube-api-search'

import API_KEY from '../key'

import SearchBar from './components/search_bar'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, videos => this.setState({ videos }))
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

render(<App />, document.querySelector('.container'))
