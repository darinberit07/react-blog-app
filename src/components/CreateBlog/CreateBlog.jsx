import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";
import { useState } from "react";

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [region, setRegion] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigationHistory = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, author, body: content, region }
        
        setIsLoading(true)
        fetch('https://664c467035bbda10987f9237.mockapi.io/blogs', {
            method: "POST",
            headers: { "Content-type":"application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            navigationHistory('/home')
        })
    }

    return (
        <div className="create-blog">
            <h2>Add a new Blog here!</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="blog-title">Blog Title</label>
                <input 
                    id="blog-title" 
                    type="text" 
                    placeholder="Enter your blog title"
                    required 
                    value={ title } 
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <label htmlFor="blog-author" required>Author</label>
                <input 
                    type="text" 
                    id="blog-author" 
                    placeholder="Enter your name"
                    required 
                    value={ author }
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}
                />

                <label htmlFor="blog-region">Region of Interest</label>
                <select 
                    name="region" 
                    id="blog-region" 
                    required
                    value={region}
                    onChange={(e) => {
                        setRegion(e.target.value)
                    }}
                >
                    <option value="">Select a region</option>
                    <option value="Mondstadt">Mondstadt</option>
                    <option value="Liyue">Liyue</option>
                    <option value="Inazuma">Inazuma</option>
                    <option value="Sumeru">Sumeru</option>
                    <option value="Fontaine">Fontaine</option>
                    <option value="Natlan">Natlan</option>
                    <option value="Snezhnaya">Snezhnaya</option>
                    <option value="Khaenri'ah">Khaenri'ah</option>
                    <option value="Other Regions">Other Regions</option>
                </select>

                <label htmlFor="blog-content" required>Content</label>
                <textarea 
                    id="blog-content"
                    placeholder="Write your blog content here..." 
                    required
                    value={ content }
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                />

                { !isLoading && <button>Add Blog</button> }
                { isLoading && <button disabled>Adding Blog...</button> }

            </form>
        </div>
    );
}
 
export default CreateBlog;