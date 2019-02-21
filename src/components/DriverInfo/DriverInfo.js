import React from 'react'
import './DriverInfo.scss'

const driverInfo = ({ year, driver, name, info, raceInfo, constructor }) => (
  <div className="driver-info d-flex">
    <div className="winning-year">{year}</div>
    <div className="d-flex flex-column justify-content-center">
      <div className="personal-info px-3 py-2">
        <a target="_blank" rel="noopener noreferrer" href={`${driver.url}`}>
          {' '}
          <strong>{name}</strong>
        </a>
        <span>{info}</span>
      </div>

      <p className="race-info px-3 py-2 lead">
        {raceInfo}{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${constructor[0].url}`}
        >
          {`${constructor[0].name}`}
        </a>
      </p>
    </div>
  </div>
)

export default driverInfo
