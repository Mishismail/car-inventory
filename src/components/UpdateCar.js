import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function UpdateCar() {
  const [carData, setCarData] = useState({ registration_number: '', updatedField: '', updatedValue: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/cars/update/${carData.registration_number}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ field: carData.updatedField, value: carData.updatedValue }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setSuccessMessage('Car updated successfully');
        setErrorMessage(''); // Clear any previous error message
        console.log(data); // Handle the response as needed
      } else {
        setSuccessMessage('');
        setErrorMessage('Error updating the car');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error updating the car');
      console.error('Error updating the car', error);
    }
  };
  

  return (
    <div>
      <h2>Update a Car</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleFormSubmit}>
        {/* Form fields for registration_number, updatedField, and updatedValue */}
        <Form.Group controlId="registration_number">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            type="text"
            value={carData.registration_number}
            onChange={(e) => setCarData({ ...carData, registration_number: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedField">
          <Form.Label>Field to Update</Form.Label>
          <Form.Control
            type="text"
            value={carData.updatedField}
            onChange={(e) => setCarData({ ...carData, updatedField: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedValue">
          <Form.Label>New Value</Form.Label>
          <Form.Control
            type="text"
            value={carData.updatedValue}
            onChange={(e) => setCarData({ ...carData, updatedValue: e.target.value })}
          />
        </Form.Group>
        <Button type="submit">Update Car</Button>
      </Form>
    </div>
  );
}

export default UpdateCar;

