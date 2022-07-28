import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function FindFlightForm(){
      return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Find Your Flight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Arrival Location</Form.Label>
                    <Form.Control type="text" placeholder="Example : Coimbatore" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Depature Location</Form.Label>
                    <Form.Control type="text" placeholder="Example : Chennai" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pick Travel Date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Modal.Footer>
        </Modal.Dialog>
      );
}

export default FindFlightForm;