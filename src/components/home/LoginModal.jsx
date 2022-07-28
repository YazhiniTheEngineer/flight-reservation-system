import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import axios from "axios";
import LoggedHome from '../loggedhome/LoggedHome';
import Home from './Home';

function LoginModal(props) {

  const [emailId,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isLogin,setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      data: {},
      params: {
          "emailId":emailId,
          "password":password
      }
  }

  axios.get("http://localhost:5000/login", config)
  .then( (response) => {
    console.log(response)
    setIsLogin(response.data)

  }
    )
  .catch(response => console.log(response));
  
  setEmail("");
  setPassword("");
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
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <FloatingLabel
              controlId="floatingInput"
              label="Email address*">
          <Form.Control required
              type="email" 
              name="emailId" 
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password*">
            <Form.Control type="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" required/>
      </FloatingLabel>

          <Modal.Footer>
            <Button type="submit">Submit</Button>
            <Button onClick={props.onHide} className="btn-danger">Close</Button>
          </Modal.Footer>
          {isLogin ? <LoggedHome /> : null}
        </Form>
      </Modal.Body>
    </Modal>


  );
}

export default LoginModal;