import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState([]);
    const [error,setError] = useState([]);   

    const fetchData = async () => {
        try {
            const {data:response} = await axios.get(url);
            setData(response);
            setLoading(false)
        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    },[])
    
    return {
        data,
        loading,
        error
    }
}

export default useFetch;