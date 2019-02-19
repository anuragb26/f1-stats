import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../../components/Header/Header'
import './Layout.scss'
import { TOAST_TIMER } from '../../constants/'

const layout = ({ children }) => (
  <Fragment>
    <Container fluid>
      <ToastContainer autoClose={TOAST_TIMER} />
      <Header />
      <section className="dashboard-container">{children}</section>
    </Container>
  </Fragment>
)
export default layout
