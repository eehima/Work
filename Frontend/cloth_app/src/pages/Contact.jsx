import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Submit form data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }
    
    setValidated(true);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-between">
        {/* Left Column - Contact Info */}
        <Col lg={4} className="mb-4 mb-lg-0">
          <h1 className="contact-heading mb-4">Contact us.</h1>
          <p className="contact-description mb-4">
            Have any questions, comments or concerns? Feel free to reach out to us
            with the contact form or email down below, thank you!
          </p>
          <div className="contact-email mt-4">
            <p>chosenforgod3@gmail.com</p>
          </div>
        </Col>

        {/* Right Column - Form */}
        <Col lg={7}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Name Field Group */}
            <Form.Group className="mb-4">
              <Form.Label className="mb-1">Name <span className="text-muted">(required)</span></Form.Label>
              <Row>
                <Col md={6} className="mb-3 mb-md-0">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your first name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name.
                  </Form.Control.Feedback>
                </Col>
              </Row>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-4">
              <Form.Label className="mb-1">Email <span className="text-muted">(required)</span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Subject Field */}
            <Form.Group className="mb-4">
              <Form.Label className="mb-1">Subject <span className="text-muted">(required)</span></Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder=""
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a subject.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Message Field */}
            <Form.Group className="mb-4">
              <Form.Label className="mb-1">Message <span className="text-muted">(required)</span></Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control-lg"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid">
              <Button 
                type="submit" 
                className="submit-button"
                size="md"
              >
                SUBMIT
              </Button>
            </div>
          </Form>
        </Col>
      </Row>

      <style jsx>{`
        .contact-heading {
          font-size: 2.5rem;
          font-weight: 500;
          color: #000;
        }
        
        .contact-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
        }
        
        .contact-email {
          font-size: 1rem;
          color: #333;
        }
        
        .form-control-lg {
          border-radius: 0;
          border: 1px solid #ccc;
          padding: 0.8rem 1rem;
          font-size: 1rem;
        }
        
        .form-control-lg:focus {
          border-color: #999;
          box-shadow: none;
        }
        
        textarea.form-control-lg {
          resize: vertical;
        }
        
        .text-muted {
          font-size: 0.9rem;
        }
        
        .submit-button {
          background-color: #aaa;
          border: none;
          border-radius: 50px;
          padding: 0.8rem 2rem;
          font-weight: 500;
          transition: background-color 0.3s ease;
          cursor: pointer;
          width: 30%;
        }
        
        .submit-button:hover {
          background-color: grey ;
        }
        
        /* Responsive styles */
        @media (max-width: 991.98px) {
          .contact-heading {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .form-control-lg {
            padding: 0.6rem 0.8rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default ContactForm;