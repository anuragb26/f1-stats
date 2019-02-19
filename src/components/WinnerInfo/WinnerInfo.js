import { Collapse } from 'reactstrap'
import React, { Component, Fragment } from 'react'
import './WinnerInfo.scss'

// const winnerInfo = ({ winnerInfo,isOpen }) => {
//   return (

//     )
// }

class WinnerInfo extends Component {
  state = {
    collapse: false
  }
  toggle = () => {
    this.setState((prevState, props) => ({
      collapse: !prevState.collapse
    }))
  }
  render() {
    const {
      props: { winnerInfo },
      state: { collapse }
    } = this

    return (
      <Fragment>
        <div onClick={this.toggle}>
          <div className="year-wrapper">{winnerInfo}</div>
        </div>
        <Collapse isOpen={collapse}>
          <div className="collapse-content py-2 px-2">Collapse content</div>
        </Collapse>
      </Fragment>
    )
  }
}

export default WinnerInfo
