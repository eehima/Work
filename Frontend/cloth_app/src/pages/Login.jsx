import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LoginModal = ({ show, handleClose, switchToSignup, switchToForgotPassword }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Chosen By God</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="secondary" type="submit" className="mt-3 w-100" style={{backgroundColor:"#3e3e3e"} }>
            Login
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "", cursor: "pointer" }}
              onClick={() => {
                handleClose();
                switchToSignup();
              }}
            >
              Create an Account
            </span>
          </p>

          <p>
            <span
              style={{ color: "", cursor: "pointer" }}
              onClick={() => {
                handleClose();
                switchToForgotPassword();
              }}
            >
              Forgot Password?
            </span>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
