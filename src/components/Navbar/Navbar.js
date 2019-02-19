import React from 'react'
import { Navbar } from 'reactstrap'
import f1 from '../../assets/img/f1.png'

const nav = () => (
  <Navbar color="light" light expand="md">
    <img src={f1} width={50} alt="logo" />
  </Navbar>
)

export default nav
