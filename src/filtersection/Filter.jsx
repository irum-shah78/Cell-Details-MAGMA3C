import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/filter.css';

const FilterCard = () => {
  const [price, setPrice] = useState([10000, 120000]);
  const [backCam, setBackCam] = useState([8, 108]);
  const [frontCam, setFrontCam] = useState([8, 50]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handlePriceChange = (value) => {
    setPrice(value);
  };

  const handleBackCamChange = (value) => {
    setBackCam(value);
  };

  const handleFrontCamChange = (value) => {
    setFrontCam(value);
  };

  const colors = [
    { label: 'Black', value: 'black' },
    { label: 'Blue', value: 'blue' },
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Purple', value: 'purple' },
    { label: 'Pink', value: 'pink' },
  ];

  const toggleColorSelection = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '400px' }}>
      <div className="border p-3 rounded">
        <h5 className="text-center fw-bold">Filter by</h5>
        <Form>
          <Form.Group controlId="backCam">
            <Form.Label>Back Camera</Form.Label>
            <Slider range min={8} max={108} defaultValue={backCam}
              onChange={handleBackCamChange}
              tipFormatter={(value) => `${value} MP`}
              tipProps={{ placement: 'top', visible: true }}
              className="custom-slider"
            />
            <div className="d-flex justify-content-between mt-2">
              <span>{backCam[0]} MP</span>
              <span>{backCam[1]} MP</span>
            </div>
          </Form.Group>

          <Form.Group controlId="frontCam">
            <Form.Label>Front Camera</Form.Label>
            <Slider range min={8} max={50} defaultValue={frontCam}
              onChange={handleFrontCamChange}
              tipFormatter={(value) => `${value} MP`}
              tipProps={{ placement: 'top', visible: true }}
              className="custom-slider"
            />
            <div className="d-flex justify-content-between mt-2">
              <span>{frontCam[0]} MP</span>
              <span>{frontCam[1]} MP</span>
            </div>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Slider range min={10000} max={120000} defaultValue={price}
              onChange={handlePriceChange}
              tipFormatter={(value) => `Rs ${value}`}
              tipProps={{ placement: 'top', visible: true }}
              className="custom-slider"
            />
            <div className="d-flex justify-content-between mt-2">
              <span>Rs {price[0]}</span>
              <span>Rs {price[1]}</span>
            </div>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="ram">
                <Form.Label>RAM</Form.Label>
                <Form.Control as="select" className='custom-select'>
                  <option>2GB</option>
                  <option>4GB</option>
                  <option>6GB</option>
                  <option>8GB</option>
                  <option>16GB</option>
                  <option>32GB</option>
                  <option>64GB</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="rom">
                <Form.Label>ROM</Form.Label>
                <Form.Control as="select" className='custom-select'>
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
                <Form.Label>Battery</Form.Label>
                <Form.Control as="select" className='custom-select'>
                  <option>3000mAh</option>
                  <option>4000mAh</option>
                  <option>5000mAh</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="fps" >
                <Form.Label>FPS</Form.Label>
                <Form.Control as="select" className='custom-select'>
                  <option>30</option>
                  <option>60</option>
                  <option>90</option>
                  <option>120</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="categories">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select" className='custom-select'>
              <option>Gaming</option>
              <option>Photography</option>
              <option>Battery Life</option>
              <option>Budget</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="colorFamily">
            <Form.Label className=''>Color Family</Form.Label>
            <div className="color-family">
              {colors.slice(0,7).map((color) => (
                <div
                  key={color.value}
                  className={`color-circle ${selectedColors.includes(color.value) ? 'selected' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => toggleColorSelection(color.value)}
                  title={color.label}
                />
              ))}
            </div>
          </Form.Group>

          <Button className="mt-3 custom-apply-button w-100" type="submit">
            Apply
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default FilterCard;
