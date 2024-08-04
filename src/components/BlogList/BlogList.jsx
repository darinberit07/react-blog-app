import { Link } from "react-router-dom";
import './BlogList.css';

const BlogList = ({ blogs, title }) => {

    const divStyle = {
        fontWeight: 'bold',
    }
    return (
        <div className="blog-list">
            <h3>{ title }</h3>
            { blogs && blogs.length > 0 ? blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h4>{ blog.title }</h4>
                        <p>{ "- " + blog.author + " | " + blog.region }</p>
                    </Link>
                </div>
            )) : (
                <div style = { divStyle } className="no-results">OOPS! That search has no results. Please try another one</div>
            )}
        </div>
    );
}
 
export default BlogList;