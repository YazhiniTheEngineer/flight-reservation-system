import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FindFlightForm from "./FindFlightForm";
import FlightsList from "./FlightsList";

function FindFlight(){
    return(
        <div>
            <div class="findflights">
            <Container>
                <Row>
                    <Col>
                        <FindFlightForm />
                    </Col>
                    <Col>
                        <img src="https://cdn.pixabay.com/photo/2019/09/30/18/11/flight-4516478__340.jpg" alt="passengers" />
                    </Col>
                </Row>
            </Container>
            <div class="findflights">
                <FlightsList />
            </div>
            </div>
        </div>
    );

}

export default FindFlight;