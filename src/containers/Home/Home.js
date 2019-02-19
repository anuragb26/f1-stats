import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import axios from 'axios'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Modal from '../../components/Modal/Modal'
import Loader from '../../components/Loader/Loader'

class Home extends Component {
  state = {
    loading: true,
    products: [],
    showModal: false
  }
  componentDidMount() {
    this.setState(
      {
        loading: true
      },
      () => {
        axios
          .get(
            'https://my-json-server.typicode.com/anuragb26/shopping-cart/productsInCart/'
          )
          .then(res => {
            this.setState({
              loading: false,
              products: res.data
            })
          })
      }
    )
  }
  toggleModal = id => {
    this.setState((prevState, props) => ({
      showModal: !prevState.showModal
    }))
  }
  render() {
    const {
      state: { showModal, loading, products }
    } = this
    console.log('products', products)
    console.log('loading', loading)
    return (
      <Fragment>
        <Row>
          <Col sm="12">
            <Jumbotron toggleModal={this.toggleModal} />
            <Modal
              isOpen={showModal}
              heading="Add Restaurant"
              size="lg"
              closeHandler={this.toggleModal}
            >
              <div className="px-1 py-1 mx-1 my-1">Modal Content</div>
            </Modal>
          </Col>
        </Row>
        <Row>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <Col
                sm="4"
                className="d-flex justify-content-center align-items-center"
              >
                <h2>{products[0].p_name || ''}</h2>
              </Col>
              <Col
                sm="4"
                className="d-flex justify-content-center align-items-center"
              >
                <h2>{products[1].p_name || ''}</h2>
              </Col>
              <Col
                sm="4"
                className="d-flex justify-content-center align-items-center"
              >
                <h2>{products[2].p_name || ''}</h2>
              </Col>
            </Fragment>
          )}
        </Row>
      </Fragment>
    )
  }
}

export default Home
