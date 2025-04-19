import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaInstagram, FaUser, FaLock } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="py-3">
      <Container fluid>
        {/* Left Links (Visible on Desktop) */}
        {/* <Nav className="d-flex flex-row gap-3 d-none d-lg-flex">
          <Nav.Link href="/">Shop</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav> */}

        {/* Center: Brand Logo (Always Centered) */}
        <Navbar.Brand
          href="#"
          className="mx-auto text-center fw-bold position-absolute"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          <img src="./images/brand.jpg" alt="Brand Logo" height={50} width={200} />
        </Navbar.Brand>

        {/* Toggler (Hamburger) and Cart Icon for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />
        <Nav className="d-flex flex-row gap-3 ms-auto d-lg-none">
          <Nav.Link href="#cart">
            <FaLock />
          </Nav.Link>
        </Nav>

        {/* Collapsible Navbar Items for Mobile & Desktop */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex flex-row gap-3 d-lg-flex">
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right: Login, Instagram, Padlock Icon (Visible on Desktop) */}
          <Nav className="d-flex flex-row gap-3 ms-auto d-lg-flex">
            <Nav.Link href="/login">
              {/* <FaUser /> */}Login
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link href="#cart">
              <FaLock />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
