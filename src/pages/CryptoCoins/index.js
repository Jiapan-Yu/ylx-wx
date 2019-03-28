import React, { Component } from 'react'
import './index.less'

class Coins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dollars: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // We only update if the dollars are multiples of 10
    return nextState.dollars % 10 === 0
  }

  handleOnChange = e => {
    this.setState({
      dollars: Number(e.target.value || 0)
    })
  }

  render() {
    return (
      <div className="Coins">
        <h1>Buy Crypto Coins!</h1>

        <div className="question">
          <p>How much dollars do you have?</p>

          <p>
            <input
              placeholder="0"
              onChange={this.handleOnChange}
              type="text"
            />
          </p>
        </div>

        <div className="answer">
          <p>Crypto Coin price: $10</p>
          <p>
            You can buy <strong>{this.state.dollars / 10}</strong> coins.
          </p>
        </div>
      </div>
    );
  }
}

export default Coins;
