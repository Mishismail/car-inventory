// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';
import DeleteCar from './components/DeleteCar';
import ListAllCars from './components/ListAllCars';
import ListCarsOlderThan5Years from './components/ListCarsOlderThan5Years';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><b>Car Inventory</b></Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/add-car" className="nav-link">Add Car</Link>
              <Link to="/update-car" className="nav-link">Update Car</Link>
              <Link to="/delete-car" className="nav-link">Delete Car</Link>
              <Link to="/listAllCars" className="nav-link">List All Cars</Link>
              <Link to="/listCarsOlderThan5Years" className="nav-link">List Cars Older Than 5 Years</Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/update-car" element={<UpdateCar />} />
          <Route path="/delete-car" element={<DeleteCar />} />
          <Route path="/listAllCars" element={<ListAllCars />} />
          <Route path="/listCarsOlderThan5Years" element={<ListCarsOlderThan5Years />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;





