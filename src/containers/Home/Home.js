import React, { Component } from 'react'
import { Row, Col, Spinner } from 'reactstrap'

class Home extends Component {
  state = {
    loading: false,
    products: []
  }

  render() {
    return (
      <Row>
        <Col sm="12">Home Page</Col>
      </Row>
    )
  }
}

export default Home
