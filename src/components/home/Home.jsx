import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navigation from "./Navigation";
import React, {useState} from "react";
import SignUpModal from "./SignUpModal";

function Home() {

    const [signupmodalShow, setSignupModalShow] = useState(false);

    return(
        <div className="page">
            <Navigation />
            <div className="homepage">
                <h3 className="small-text">Welcome To</h3> <br />
                <h1 className="big-text">Flight Reservation System</h1>
                <div className="text-center button">
                    <Button className="btn-lg" onClick={() => setSignupModalShow(true)}>Book Now</Button>
                    <SignUpModal
                        show={signupmodalShow}
                        onHide={() => setSignupModalShow(false)}
                    />
                </div>
            </div>
        </div>
    );    
}

export default Home; 