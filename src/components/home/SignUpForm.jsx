import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function SignUpForm(props) {
  return (
    <Form >
      <FloatingLabel controlId="floatingUsername" label="User Name*">
        <Form.Control type="text" name="userName" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address*"
      >
        <Form.Control type="email" name="emailId" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password*">
        <Form.Control type="password" name="password" placeholder="Password" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password*">
        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
      </FloatingLabel>
    </Form>
  );
}

export default SignUpForm;