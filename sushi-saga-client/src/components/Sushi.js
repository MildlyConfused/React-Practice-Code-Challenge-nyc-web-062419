import React, { Fragment } from "react"

class Sushi extends React.Component {
  state = { eaten: false }

  render() {
    return (
      <div className="sushi">
        <div
          className="plate"
          onClick={e => {
            if (
              this.props.wallet - this.props.sushiInfo.price >= 0 &&
              !this.state.eaten
            ) {
              this.setState({ eaten: true })
              this.props.handleClick(e, this.props.sushiInfo)
            } else {
              alert("This Sushi has already been eaten or you are broke")
            }
          }}
        >
          {this.state.eaten ? null : (
            <img src={this.props.sushiInfo.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushiInfo.name} - ${this.props.sushiInfo.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
