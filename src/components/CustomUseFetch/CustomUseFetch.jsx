import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok){
                throw Error("Something went wrong! Could not connect to the server.")
            }
            return res.json()
        })
        .then(response => {
            setData(response)
            setIsLoading(false)
            setError(null)

        })
        .catch((e) => {
            if (e.message === ('Failed to fetch' || 'Failed to fetch data')) {
                setError('Unable to connect to the server! Please try again later.');
            } else {
                setError(e.message);
            }
            setIsLoading(false)
            setData(null)
        })
    }, [url])

    return { data, isLoading, error };
}
 
export default useFetch;