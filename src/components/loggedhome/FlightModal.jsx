import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function FlightModal(props){
    return (
        <Modal
          {...props}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                Try
          </Modal.Body>
          <Modal.Footer>
            <Button>Submit</Button>
            <Button onClick={props.onHide} className="btn-danger">Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default FlightModal;