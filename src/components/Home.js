// Home.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

function Home() {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await fetch('/cars/listAllCars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCars(data.cars);
      } else {
        throw new Error('Error fetching cars');
      }
    } catch (error) {
      console.error('Error fetching cars', error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <Container className="custom-container">
      <h2 className="mb-4"><b>List of All Cars</b></h2>
      <Row>
        {cars.map((car, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="car-card">
              <Card.Body>
                <Card.Title>{car.make} {car.model}</Card.Title>
                <Card.Text>
                  <strong>Colour:</strong> {car.colour}<br />
                  <strong>Registration Number:</strong> {car.registration_number}<br />
                  <strong>Owner:</strong> {car.owner}<br />
                  <strong>Address:</strong> {car.address}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;