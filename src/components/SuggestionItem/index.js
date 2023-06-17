// Write your code here
import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  onClickUpdateSearchInput = () => {
    const {searchInfo, updateSearchInput} = this.props
    const {suggestion} = searchInfo
    updateSearchInput(suggestion)
  }

  render() {
    const {searchInfo} = this.props
    const {suggestion} = searchInfo

    return (
      <div className="container">
        <li className="suggestion-item" onClick={this.onClickUpdateSearchInput}>
          <p className="suggestion-name">{suggestion}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-logo"
          />
        </li>
      </div>
    )
  }
}
export default SuggestionItem
