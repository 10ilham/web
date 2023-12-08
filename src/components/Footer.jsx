import Container from 'react-bootstrap/Container';
import  Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../assets/img/astro-indo.svg';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={1} className='flex justify-center mt-3'>
              <img src={logo} className='rounded-full border'/>
            </Col>
            <Col size={12} sm={7} className='text-center text-sm-start mt-3 font-semibold '>
                <p>Ilham Munawar</p>
            </Col>
            <Col size={12} sm={4} className="text-center text-sm-end mt-3 ">
              <p>Copyright 2023</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }