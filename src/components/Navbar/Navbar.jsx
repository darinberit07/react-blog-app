import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="main-navbar">
            <Link to="/home"><h1>Blog App</h1></Link>
            <div className="nav-links">
               <Link to='/home'>Home</Link>
               <Link to='/create'>Create Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;