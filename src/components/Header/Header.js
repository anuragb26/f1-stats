import React from 'react'
import { Col, Row } from 'reactstrap'
import Navbar from '../Navbar/Navbar'

const header = () => (
  <header className="header mb-2">
    <Row>
      <Col sm="12">
        <Navbar />
      </Col>
    </Row>
  </header>
)

export default header
