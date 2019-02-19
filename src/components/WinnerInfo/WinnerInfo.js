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
      props: {
        year,
        winnerInfo: { Driver: driver, Constructors: constructor, points, wins }
      },
      state: { collapse }
    } = this
    console.log('winnerInfo', constructor)

    const info = ` (${driver.nationality},25 years)`
    const name = `${driver.givenName} ${driver.familyName}`
    const raceInfo = `Won ${points}  points winning ${wins} races driving for ${
      constructor[0].name
    }`
    return (
      <Fragment>
        <div
          onClick={this.toggle}
          className="winner-info-content d-flex justify-content-between"
        >
          <div className="driver-info d-flex">
            <div className="winning-year">{year}</div>
            <div className="d-flex flex-column justify-content-center">
              <div className="personal-info px-3 py-2">
                <strong>{name}</strong>
                <span>{info}</span>
              </div>
              <p className="race-info px-3 py-2 lead">{raceInfo}</p>
            </div>
          </div>
          <span className={`oi oi-plus mx-2 ${collapse ? 'd-none' : ''}`} />
          <span className={`oi oi-minus mx-2 ${!collapse ? 'd-none' : ''}`} />
        </div>
        <Collapse isOpen={collapse}>
          <div className="collapse-content py-2 px-2">Collapse content</div>
        </Collapse>
      </Fragment>
    )
  }
}

export default WinnerInfo
