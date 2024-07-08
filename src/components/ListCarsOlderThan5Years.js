//ListCarsOlderThan5Years.js

import React, { useState, useEffect } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function ListCarsOlderThan5Years() {
  const [olderCars, setOlderCars] = useState([]);

  const fetchOlderCars = async () => {
    try {
      const response = await fetch('http://localhost:8080/cars/listOlderThan5Years', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOlderCars(data.cars);
      } else {
        throw new Error('Error fetching older cars');
      }
    } catch (error) {
      console.error('Error fetching older cars', error);
    }
  };

  useEffect(() => {
    fetchOlderCars();
  }, []);

  return (
    <Container className="custom-container">
      <h2 className="mb-4"><b>List of Cars Older Than 5 Years</b></h2>
      <Row>
        {olderCars.map((car, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="car-card">
              <Card.Body>
                <Card.Title>{car.make} {car.model}</Card.Title>
                <Card.Text>
                  <strong>Registration Number:</strong> {car.registration_number}<br />
                  <strong>Owner:</strong> {car.owner}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        variant="primary"
        onClick={fetchOlderCars}
        className="mt-4"
      >
        Refresh List
      </Button>
    </Container>
  );
}

export default ListCarsOlderThan5Years;



