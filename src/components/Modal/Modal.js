import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const modal = ({ isOpen, closeHandler, children, heading, size }) => {
  const closeModal = () => {
    const id = 1
    closeHandler(id)
  }
  return (
    <Modal size={size} isOpen={isOpen} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>{heading}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  )
}
export default modal
