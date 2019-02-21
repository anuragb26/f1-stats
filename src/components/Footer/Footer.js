import React from 'react'
import { Col, Row } from 'reactstrap'
import copyright from '../../assets/img/copyright.png'

const footer = () => (
  <footer className="footer">
    <Row>
      <Col
        sm="12"
        className="bg-dark text-white mt-3 py-3 d-flex justify-content-center align-items-center"
      >
        Copyright{' '}
        <img
          src={copyright}
          height={20}
          width={20}
          className="mx-2"
          alt="copyright"
        />{' '}
        Anurag Bajaj
      </Col>
    </Row>
  </footer>
)

export default footer
