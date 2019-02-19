import React from 'react'
import { Jumbotron, Button } from 'reactstrap'
import eatEasy from '../../assets/img/eateasy.png'
import './Jumbotron.scss'

const JumbotronSection = ({ toggleModal }) => {
  const handleToggleModal = event => {
    console.log('in handle togglemodal', event.target.dataset.id)
    toggleModal(event.target.dataset.id)
  }
  return (
    <Jumbotron>
      <img src={eatEasy} width={100} alt="logo" />
      <p className="lead">
        Curated Collection of restaurants for you to offer delightful cuisines!
      </p>
      <hr className="my-2" />
      <div className="d-flex">
        <Button
          color="primary"
          data-id="3"
          className="mx-2"
          onClick={handleToggleModal}
        >
          Learn More
        </Button>
      </div>
    </Jumbotron>
  )
}

export default JumbotronSection
