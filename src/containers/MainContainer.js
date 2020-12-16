import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addStock = (stock) => {
    let newPortfolio =  [...this.state.portfolio, stock]    
    this.setState({
      portfolio: [...new Set(newPortfolio)] // Returns an array with unique values
    })
  }

  removeStock = (stock) => {
    const newPortfolio = this.state.portfolio.filter(p => p.name !== stock.name)
    this.setState({
      portfolio: newPortfolio
    })
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }  

  switchValues(array, value) {
    switch (value) {
      case 'Alphabetically':
        return array.sort((a, b) => a.name.localeCompare(b.name))
      case 'Price':
        return array.sort((a, b) => a.price - b.price)   
      default:
        return array.filter(stock => stock.type.includes(value))
    }
  }

  render() {
    const filteredStock = this.switchValues(this.state.stocks, this.state.filter)
    const filteredPortfolio = this.switchValues(this.state.portfolio, this.state.filter)
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} />
          <div className="row">
            <div className="col-8">
              <StockContainer isPortfolio={false} stocks={filteredStock} addStock={this.addStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer isPortfolio={true} portfolio={filteredPortfolio} removeStock={this.removeStock} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
