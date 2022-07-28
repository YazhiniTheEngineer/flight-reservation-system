import flights from "./Flights";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FlightsList() {

  

  return (
    <div style={{padding:'7% 0%'}}>
      <h2>Available Flights</h2>
      <Row lg={3}>
      { flights.length > 0 && flights.map(i => {

        return (
          <Col className="d-flex" style={{ width: '18rem',padding:'1%'}}>
            <Card className="flex-fill"  key={i.id}>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/09/25/17/14/airplane-3702676__340.jpg" />
              <Card.Body>
                  <Card.Title>{i.name}</Card.Title>
                  <Card.Text>{i.arrivalLocation}</Card.Text>
                  <Card.Text>{i.depatureLocation}</Card.Text>
                  <Card.Text>{i.arrivalTime}</Card.Text>
                  <Card.Text>{i.flightDate}</Card.Text>
                  <Button variant="primary" >Book Now</Button>
                  
              </Card.Body>
            </Card>
          </Col>
        )
      })}
      </Row>
    </div>
  );
}

export default FlightsList;