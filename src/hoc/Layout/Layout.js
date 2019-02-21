import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const layout = ({ children }) => (
  <Fragment>
    <Container fluid>
      <Header />
      <section className="app">{children}</section>
      <Footer />
    </Container>
  </Fragment>
)
export default layout
