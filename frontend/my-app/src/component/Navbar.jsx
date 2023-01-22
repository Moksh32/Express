import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png'
import '../App.css'
import icon from '../icons/box-arrow-in-right.svg';
import registericon from '../icons/person-add.svg';
import { Outlet, Link } from "react-router-dom";
function ColorSchemesExample() {
  return (
    <>
      {/* <Navbar bg="transparent" variant="light">
        <Container fluid>
          <img src={logo} className="position-absolute" width={"80px"} alt="" />
          <Link to='/'><Navbar.Brand className='nav-margin'>Moksh Prithiani</Navbar.Brand></Link>
          
        </Container>
      </Navbar> */}

      <Navbar className='p-0' bg="transparent" expand="lg">
        <Container fluid className='p-0'>

          <Navbar.Brand className='nav-margin'><img src={logo} width={"80px"} alt="" />Moksh Prithiani</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className="me-0">
              <Link to="/"><Nav className='nav-link'>Home</Nav></Link>
              <Link to="/about"><Nav className='nav-link'>About me</Nav></Link>
              <Link to="/contact"><Nav className='nav-link'>Contact us</Nav></Link>
              <Link to="/register"><Nav className='nav-link'><img src={registericon} alt="" className='me-1 mb-1' width={"20px"} />Register</Nav></Link>
              <Link to="/signin"><Nav className='nav-link'><img src={icon} alt="" className='me-1 mb-1' width={"20px"} />Sign in</Nav></Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default ColorSchemesExample;