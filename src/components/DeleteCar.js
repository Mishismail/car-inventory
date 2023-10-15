// DeleteCar.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function DeleteCar() {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a DELETE request to your Express API to delete the car
      const response = await fetch(`http://localhost:3000/cars/delete/${registrationNumber}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data); // Handle the response as needed
        // Clear the registration number field after a successful deletion
        setRegistrationNumber('');
      } else {
        console.error('Error deleting the car');
      }
    } catch (error) {
      console.error('Error deleting the car', error);
    }
  };

  return (
    <div>
      <h2>Delete a Car</h2>
      <Form onSubmit={handleFormSubmit}>
        {/* Form field for registration_number */}
        <Form.Group controlId="registrationNumber">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Delete Car</Button>
      </Form>
    </div>
  );
}

export default DeleteCar;

