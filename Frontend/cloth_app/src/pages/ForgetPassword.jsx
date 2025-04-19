import React, { useState } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'

const ForgotPasswordModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setError('Please enter your email')
      return
    }

    setError('')
    setMessage('Reset link has been sent to your email')
    // You can trigger your password reset logic here

    setTimeout(() => {
      setMessage('')
      handleClose()
    }, 2500)
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Reset Your Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {message && <Alert variant="success" className="mt-3">{message}</Alert>}

          <Button variant="secondary" type="submit" className="mt-3 w-100" style={{backgroundColor:"#3e3e3e"} }>
            Send Reset Link
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ForgotPasswordModal
