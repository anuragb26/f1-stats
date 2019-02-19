import React from 'react'
import { Navbar } from 'reactstrap'
import eatEasy from '../../assets/img/eateasy.png'

const nav = () => (
  <Navbar color="light" light expand="md">
    <i className="ionicons ion-podium" />
    {/* <img src = {eatEasy} width={50} alt='logo'/> */}
    <span class="oi oi-aperture" />
    {/* <NavbarToggler onClick={this.toggle} /> 
                <Collapse isOpen={this.state.isOpen} navbar>
              </Collapse> */}
  </Navbar>
)

export default nav
