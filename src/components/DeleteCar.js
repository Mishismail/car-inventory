// DeleteCar.js

import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import '../App.css';

function DeleteCar() {
  const [registration_number, setRegistrationNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/cars/delete/${registration_number}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Car deleted successfully');
        setErrorMessage('');
        console.log(data);
        setRegistrationNumber('');
      } else {
        throw new Error('Error deleting the car');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error deleting the car');
      console.error('Error deleting the car', error);
    }
  };

  return (
    <Container className="custom-container">
      <h2 className="mb-4"><b>Delete a Car</b></h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="registration_number">
          <Form.Label><b>Registration Number</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration number"
            name="registration_number"
            value={registration_number}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Delete Car
        </Button>
      </Form>
    </Container>
  );
}

export default DeleteCar;