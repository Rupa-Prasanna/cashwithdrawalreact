import './index.css'

const DenominationItem = props => {
  const {eachDenomination, withdrawAmount} = props
  const {value} = eachDenomination

  const balanceAmount = () => {
    withdrawAmount(value)
  }
  return (
    <li className="denomination_item">
      <button type="button" onClick={balanceAmount}>
        {' '}
        {value}{' '}
      </button>
    </li>
  )
}
export default DenominationItem
