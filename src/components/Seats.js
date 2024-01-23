import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Seats() {
  const eliteRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-', 'K', 'L', 'M'];
  const economyRows = ['M', 'N'];

  const columns = Array.from({ length: 17 }, (_, i) => i + 1);

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, column) => {
    const seatId = `${row}${column}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderEliteSeats = () => {
    return eliteRows.map((row, rowIndex) => (
      <Row key={rowIndex} className="justify-content-center mb-2">
        <Col>
          <p className="text-center">{row}</p>
          <div className="d-flex flex-wrap justify-content-center">
            {columns.map((column, columnIndex) => (
              <Button
                key={columnIndex}
                variant="success"
                onClick={() => toggleSeat(row, column)}
                style={{
                  margin: '5px',
                  borderColor: 'green',
                  color:'black',
                  backgroundColor: selectedSeats.includes(`${row}${column}`) ? 'green' : 'white',
                }}
              >
                {column}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    ));
  };

  const renderEconomySeats = () => {
    return economyRows.map((row, rowIndex) => (
      <Row key={rowIndex} className="justify-content-center mb-2">
        <Col>
          <p className="text-center">{row}</p>
          <div className="d-flex flex-wrap justify-content-center">
            {columns.map((column, columnIndex) => (
              <Button
                key={columnIndex}
                variant="success"
                onClick={() => toggleSeat(row, column)}
                style={{
                  margin: '5px',
                  borderColor: 'green',
                  backgroundColor: selectedSeats.includes(`${row}${column}`) ? 'green' : 'white',
                }}
              >
                {column}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    ));
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Select Your Seats</h2>
      <div className="mb-4">
        <h4 className="text-center mb-3">Elite Class - Rs. 190.78</h4>
        {renderEliteSeats()}
      </div>
      <div>
        <h4 className="text-center mb-3">Economy Class - Rs. 60.12</h4>
        {renderEconomySeats()}
      </div>
      <div className="text-center mt-4">
        <p>Selected Seats: {selectedSeats.join(', ')}</p>
      </div>
    </Container>
  );
}

export default Seats;