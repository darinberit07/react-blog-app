import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <h4>Sorry, the requested page cannot be found.</h4>
            <Link to='/home'>
                <button>
                    Return to Home
                </button>
            </Link>
        </div>
    );
}
 
export default NotFound;