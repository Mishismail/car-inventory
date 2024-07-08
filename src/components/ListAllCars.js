import React, { useState, useEffect } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

function ListAllCars() {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:8080/cars/listAllCars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setCars(data.cars);
      } else {
        if (response.status === 404) {
          console.error('Resource not found');
        } else if (response.status === 500) {
          console.error('Internal server error');
        } else {
          console.error('Error fetching cars. Status:', response.status);
        }
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
        onClick={fetchCars}
        className="mt-4"
      >
        Refresh List
      </Button>
    </Container>
  );
}

export default ListAllCars;