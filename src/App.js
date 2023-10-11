import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddCar from './components/AddCar.js';
import UpdateCar from './components/UpdateCar.js';
import DeleteCar from './components/DeleteCar.js';
import ListAllCars from './components/ListAllCars.js';
import ListCarsOlderThan5Years from './components/ListCarsOlderThan5Years.js';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/add-car">Add Car</Link>
            </li>
            <li>
              <Link to="/update-car">Update Car</Link>
            </li>
            <li>
              <Link to="/delete-car">Delete Car</Link>
            </li>
            <li>
              <Link to="/list-all-cars">List All Cars</Link>
            </li>
            <li>
              <Link to="/list-cars-older-than-5-years">List Cars Older Than 5 Years</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add-car" component={AddCar} />
          <Route path="/update-car" component={UpdateCar} />
          <Route path="/delete-car" component={DeleteCar} />
          <Route path="/list-all-cars" component={ListAllCars} />
          <Route path="/list-cars-older-than-5-years" component={ListCarsOlderThan5Years} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

