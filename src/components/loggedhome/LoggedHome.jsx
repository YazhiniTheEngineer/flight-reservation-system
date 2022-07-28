import "./LoggedHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoggedNavigation from "./LoggedNavigation";
import FindFlight from "./FindFlight";

function LoggedHome() {

    return(
        <div>
            <LoggedNavigation />
            <div className="page">
                <div className="homepage">
                    <h3 className="small-text">Welcome, Name To</h3> <br />
                    <h1 className="big-text">Flight Reservation System</h1>
                </div>
            </div>
            <div className="secondpage">
                <FindFlight />
            </div>
        </div>
    );    
}

export default LoggedHome; 