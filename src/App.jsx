import './App.css';
import Header from './components/Header';
import useFetch from './hooks/useFetch';
import { SearchContext } from './context/searchContext';
import { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import Card from './components/Card';
import NoMovies from './components/NoMovies';
import { CircularProgress } from '@mui/material';

function App() {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  console.log(searchQuery);
  console.log(loading);

  const fetchData = useCallback(
    debounce(async (searchQuery) => {
      try {
        setLoading(true);
        const data = await axios.get(
          `${import.meta.env.VITE_API_URL}/?apikey=23d3974b&s=${searchQuery}`
        );

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(data);
      }
    }, 1000),
    []
  );

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  console.log(data);

  return (
    <>
      <Header data={data} />
      {loading ? (
        <div className="min-h-[70vh] flex justify-center items-center">
          <CircularProgress
            sx={{
              color: 'white',
            }}
          />
        </div>
      ) : data?.data?.Search?.length > 0 ? (
        <section className="my-0 mx-auto rounded-md w-[90vw] grid grid-cols-3 gap-5 justify-center  min-h-96">
          {data?.data?.Search?.map((data) => (
            <Card key={data.Title} data={data} />
          ))}
        </section>
      ) : (
        <NoMovies />
      )}
    </>
  );
}

export default App;
