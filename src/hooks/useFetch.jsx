import { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';

const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [loading ,setLoading] = useState(false)
  const [error, setError] = useState('')

 
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await axios.get(url);
        setData(data);
        setLoading(false)
      } catch (error) {
       setError(error.response.message)
      }
    };
    fetchData()
  },[]);

  return [data,loading,error] ;
};


export  default useFetch
