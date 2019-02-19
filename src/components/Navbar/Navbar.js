import React from 'react'
import { Navbar } from 'reactstrap'
import eatEasy from '../../assets/img/eateasy.png'
import f1 from '../../assets/img/f1.png'

const nav = () => (
  <Navbar color="light" light expand="md">
    {/* <img src={eatEasy} width={50} alt="logo" /> */}
    <img src={f1} width={50} alt="logo" />
    {/* <span className="oi oi-aperture" /> */}
    {/* <NavbarToggler onClick={this.toggle} /> 
                <Collapse isOpen={this.state.isOpen} navbar>
              </Collapse> */}
  </Navbar>
)

export default nav
