import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Filter = () => {
  return (
    <>
      <Container className="mt-4" style={{ maxWidth: '400px' }}>
        <div className="border p-3">
          <Form>
            <Form.Group controlId="backCam">
              <Form.Label>BackCam</Form.Label>
              <Form.Control type="range" />
            </Form.Group>

            <Form.Group controlId="frontCam">
              <Form.Label>FrontCam</Form.Label>
              <Form.Control type="range" />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="range" />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="ram">
                  <Form.Control as="select">
                    <option>RAM</option>
                    <option>2GB</option>
                    <option>4GB</option>
                    <option>6GB</option>
                    <option>8GB</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="rom">
                  <Form.Control as="select">
                    <option>ROM</option>
                    <option>32GB</option>
                    <option>64GB</option>
                    <option>128GB</option>
                    <option>256GB</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="battery">
                  <Form.Control as="select">
                    <option>Battery</option>
                    <option>3000mAh</option>
                    <option>4000mAh</option>
                    <option>5000mAh</option>
                    <option>6000mAh</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="fps">
                  <Form.Control as="select">
                    <option>FPS</option>
                    <option>30</option>
                    <option>60</option>
                    <option>90</option>
                    <option>120</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="categories">
              <Form.Control as="select">
                <option>Categories</option>
                <option>Gaming</option>
                <option>Photography</option>
                <option>Battery Life</option>
                <option>Budget</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" className="mt-3" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  )
};

export default Filter;