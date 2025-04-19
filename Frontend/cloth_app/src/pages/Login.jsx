import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, handleClose, switchToSignup}) => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    handleClose();
    navigate("/register"); // Adjust the path based on your app
  };

  const handleResetPassword = () => {
    handleClose();
    navigate("/reset-password"); // Adjust the path accordingly
  };

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

          <Button variant="secondary" type="submit" className="mt-3 w-100">
            Login
          </Button>
        </Form>

        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() => {
                handleClose();
                switchToSignup();
              }}
            >
              Create an Account
            </span>
          </p>

          <p>
            Forgot Password?{" "}
            <span
              style={{
                color: "#007bff",
                cursor: "pointer",
                textDecoration: "none",
              }}
              onClick={handleResetPassword}
            >
              Reset Password
            </span>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
