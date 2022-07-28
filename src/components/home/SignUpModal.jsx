import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from "axios";



function SignUpModal(props) {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [emailId,setEmail] = useState("");
  const [phnNo,setPhnNo] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      firstName,lastName,emailId,phnNo,password
    };


    axios.post("http://localhost:5000/signup",postData).then(response => {
      console.log(response);
    }).catch(response =>
      console.log(response)
      )
    // alert(firstname+lastname
    //   +" "+email+" "+phnNo+" "+password+" "+confirmPassword);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhnNo("");
    setPassword("");
    setConfirmPassword("");
    props.onHide();

}

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingUsername" label="First Name*">
              <Form.Control required
              type="text" 
              name="firstname" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingUsername" label="Last Name*">
              <Form.Control required
              type="text" 
              name="lastname" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Email address*"
            >
              <Form.Control required
              type="email" 
              name="emailId" 
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="PhoneNumber*"
            >
              <Form.Control required
              type="text" 
              name="phnNo" 
              value={phnNo}
              onChange={(e) => setPhnNo(e.target.value)}
              placeholder="9876543210" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password*">
              <Form.Control type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" required/>
            </FloatingLabel>

            <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password*">
              <Form.Control type="password" 
              name="confirmPassword" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password" required/>
            </FloatingLabel>
            <Modal.Footer>
              <Button type="submit" >Submit</Button>
              <Button onClick={props.onHide} className="btn-danger">Close</Button>
            </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;