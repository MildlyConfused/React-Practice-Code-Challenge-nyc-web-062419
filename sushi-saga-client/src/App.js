import React, { Component } from "react"
import SushiContainer from "./containers/SushiContainer"
import Table from "./containers/Table"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { allSushi: [], index: 0, money: 100, rollsEaten: [] }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ allSushi: json })
      })
  }

  handleSushiClick = (e, sushi) => {
    const rolls = [...this.state.rollsEaten, sushi]
    const wallet = this.state.money - sushi.price
    this.setState({ rollsEaten: rolls, money: wallet })
  }

  handleMoreClick = () => {
    this.setState({
      index:
        this.state.index < this.state.allSushi.length - 4
          ? this.state.index + 4
          : 0
    })
  }

  render() {
    // console.log(this.state.allSushi)
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          index={this.state.index}
          moreClicked={this.handleMoreClick}
          sushiClicked={this.handleSushiClick}
          wallet={this.state.money}
        />
        <Table money={this.state.money} rollsEaten={this.state.rollsEaten} />
      </div>
    )
  }
}

export default App
