import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../CustomUseFetch/CustomUseFetch'
import './BlogDetails.css';
import { useState } from "react";

const BlogDetails = () => {

    const errorStyle = {
        color: 'red',
        fontSize: '1.5em',
        marginTop: '10px',
    }

    const [errorInDelete, setErrorInDelete] = useState(false)

    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch("https://664c467035bbda10987f9237.mockapi.io/blogs/"+ id)

    const navHistory = useNavigate()

    const handleHomeClick = () => {
        navHistory('/')
    }

    const handleDeleteClick = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this blog? This cannot be undone!");
        if(isConfirmed){
            fetch("https://664c467035bbda10987f9237.mockapi.io/blogs/"+ id, {
                method: "DELETE"
            }).then((response) => {
                console.log(response);
                if(!response.ok){
                    setErrorInDelete(true)
                }
                else{
                    navHistory('/')
                }
            }).catch(() => {
                setErrorInDelete(true);
            })
        }
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Laading blog....</div> }
            { error && <div style = { errorStyle } > { error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p><b>Written by { blog.author } | Region of Interest: { blog.region } </b></p>
                    <div className="blog-body">
                        { blog.body }
                    </div>
                    <button className="home-button" onClick={ handleHomeClick }>Back to Home</button>
                    <button className="delete-button" onClick={ handleDeleteClick }>Delete Blog</button>
                    { errorInDelete && <div style={errorStyle}>Delete failed, try again</div> }
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;