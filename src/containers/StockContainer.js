import React, { Component } from 'react';
import Stock from '../components/Stock';

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} addStock={this.props.addStock} isPortfolio={this.props.isPortfolio} />)}       
      </div>
    );
  }
}

export default StockContainer;
