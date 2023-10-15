import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components

import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';
import DeleteCar from './components/DeleteCar';
import ListAllCars from './components/ListAllCars';
import ListCarsOlderThan5Years from './components/ListCarsOlderThan5Years';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Create a Bootstrap Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><b>Car Inventory</b></Navbar.Brand> {/* Change 'Your App Name' to your app's name */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/add-car">Add Car</Nav.Link>
              <Nav.Link as={Link} to="/update-car">Update Car</Nav.Link>
              <Nav.Link as={Link} to="/delete-car">Delete Car</Nav.Link>
              <Nav.Link as={Link} to="/list-all-cars">List All Cars</Nav.Link>
              <Nav.Link as={Link} to="/list-cars-older-than-5-years">List Cars Older Than 5 Years</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/update-car" element={<UpdateCar />} />
          <Route path="/delete-car" element={<DeleteCar />} />
          <Route path="/list-all-cars" element={<ListAllCars />} />
          <Route path="/list-cars-older-than-5-years" element={<ListCarsOlderThan5Years />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



