//UpdateCar.js

import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import '../App.css';

function UpdateCar() {
  const [carData, setCarData] = useState({
    registration_number: '',
    updatedField: '',
    updatedValue: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/cars/update/${carData.registration_number}`;
    const requestData = {
      field: carData.updatedField,
      value: carData.updatedValue,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Car updated successfully');
        setErrorMessage(''); // Clear any previous error message
        console.log(data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Error updating the car');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error updating the car');
      console.error('Error updating the car', error);
    }
  };

  return (
    <Container className="custom-container">
      <h2 className="mb-4"><b>Update a Car</b></h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="registration_number">
          <Form.Label><b>Registration Number</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter registration number"
            value={carData.registration_number}
            onChange={(e) => setCarData({ ...carData, registration_number: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedField">
          <Form.Label><b>Field to Update</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the field you wish to update"
            value={carData.updatedField}
            onChange={(e) => setCarData({ ...carData, updatedField: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedValue">
          <Form.Label><b>New Value</b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the new value"
            value={carData.updatedValue}
            onChange={(e) => setCarData({ ...carData, updatedValue: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Car
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateCar;