//AddCar.js

import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import '../App.css';

function AddCar() {
  const [carData, setCarData] = useState({
    model: '',
    make: '',
    colour: '',
    registration_number: '',
    owner: '',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      const response = await fetch('http://localhost:8080/cars/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Car added successfully!');
        setErrorMessage('');
        // Clear the form after a successful submission
        setCarData({
          model: '',
          make: '',
          colour: '',
          registration_number: '',
          owner: '',
          address: '',
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Error adding the car');
      }
    } catch (error) {
      console.error('Error adding the car', error);
      setErrorMessage('Error adding the car');
      setSuccessMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="custom-container">
      <h2 className="mb-4"><b>Add a Car</b></h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="model">
          <Form.Label><b>Model</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car year model"
            value={carData.model}
            onChange={(e) => setCarData({ ...carData, model: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="make">
          <Form.Label><b>Make</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car brand"
            value={carData.make}
            onChange={(e) => setCarData({ ...carData, make: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="colour">
          <Form.Label><b>Colour</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter car colour"
            value={carData.colour}
            onChange={(e) => setCarData({ ...carData, colour: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="registration_number">
          <Form.Label><b>Registration Number</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration number"
            value={carData.registration_number}
            onChange={(e) => setCarData({ ...carData, registration_number: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="owner">
          <Form.Label><b>Current Owner</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter current owner"
            value={carData.owner}
            onChange={(e) => setCarData({ ...carData, owner: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label><b>Address</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={carData.address}
            onChange={(e) => setCarData({ ...carData, address: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting} className="button">
          {isSubmitting ? 'Adding Car...' : 'Add Car'}
        </Button>
      </Form>
    </Container>
  );
}

export default AddCar;