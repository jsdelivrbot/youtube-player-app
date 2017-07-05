import React from 'react'
import { render } from 'react-dom'
import YTSearch from 'youtube-api-search'

import API_KEY from '../key'

import SearchBar from './components/search_bar'

YTSearch({ key: API_KEY, term: 'surfboards' }, data => console.log(data))

const App = () => (
  <div>
    <SearchBar />
  </div>
)

render(<App />, document.querySelector('.container'))
