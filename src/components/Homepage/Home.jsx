import { useState } from 'react';
import BlogList from '../BlogList/BlogList';
import useFetch from '../CustomUseFetch/CustomUseFetch'
import './Home.css'
const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('https://664c467035bbda10987f9237.mockapi.io/blogs')

    const [selectedRegion, setSelectedRegion] = useState("All Regions");

    const handleRegionChange = (e) => {
        setSelectedRegion(e.target.value);
    }

    const errorStyle = {
        color: 'red',
        margin: '10px'
    }

    const featuredBlogs = blogs?blogs.slice(0,2):[]
    const filteredBlogs = blogs && (selectedRegion === "All Regions" ? blogs : blogs.filter(blog => blog.region === selectedRegion))

    return (
        <div className="homepage">
            <h2>Home</h2>
            { error && <div style = { errorStyle } >{ error }</div> }
            { isLoading && <div>Content loading.....</div> }
            { blogs && <BlogList blogs={ featuredBlogs } title="Featured Blogs!" ></BlogList> }
            
            <label htmlFor="region-filter">Filter blogs based on region of interest</label>
            <select name="region-filter" id="region-filter" value={ selectedRegion } onChange={ handleRegionChange }>
                <option value="All Regions">All Regions</option>
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
            { error && <div style = { errorStyle} >{ error }</div> }
            { blogs && <BlogList blogs={ filteredBlogs } title={`Blogs on ${selectedRegion}`} ></BlogList> }

        </div>
    );
}
 
export default Home;