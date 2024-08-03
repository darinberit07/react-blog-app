import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="main-navbar">
            <Link to="/react-blog-app/home"><h1>Blog App</h1></Link>
            <div className="nav-links">
               <Link to='/react-blog-app/home'>Home</Link>
               <Link to='/react-blog-app/create'>Create Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;