import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawl extends Component {
  state = {amount: 2000}

  withdrawAmount = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg_container">
        <div className="blue_container">
          <div className="name_container">
            <div className="name_logo"> s </div>
            <h1> Sarah Williams</h1>
          </div>
          <div className="balance_container">
            <p> Your Balance</p>
            <div className="amount_container">
              <p>{amount}</p>
              <p> in Rupees</p>
            </div>
          </div>
          <p> Withdraw </p>
          <p> CHOOSE SUM (IN RUPEES)</p>
          <ul className="button_container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                eachDenomination={eachItem}
                withdrawAmount={this.withdrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawl
