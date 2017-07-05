import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return <input onChange={e => console.log(e.target.value)} />
  }
}
