import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Components/Top/Top';
import Footer from './Components/Footer/Footer'
import './Components/Footer/Footer.css'
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { AccordionButton, Nav } from 'react-bootstrap';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import Career from './Components/Career/Career';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="container-fluid sticky-top bg-dark p-2">
          <div className="d-flex">
            <h3 className="text-white ps-3 me-5" onClick={reload}>Language Academy</h3>
            <NavLink to="/Home">
              <h3 className="txt-style px-3 mx-3 text-white">Home</h3>
            </NavLink>
            <NavLink to="/Courses">
              <h3 className="txt-style px-3 mx-3 text-white">Courses</h3>
            </NavLink>
            <NavLink to="/Top">
              {/* <Top></Top> */}
            </NavLink>
            <NavLink to="/About">
              <h3 className="txt-style px-3 mx-3 text-white">About</h3>
            </NavLink>
            <NavLink to="/Career">
              <h3 className="txt-style px-3 mx-3 text-white">Career</h3>
            </NavLink>
          </div>

        </nav>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Courses">
            <Courses></Courses>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Career">
            <Career></Career>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

const reload = () => {
  window.location.reload();
}

export default App;
