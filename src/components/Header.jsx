import React, { useRef, useEffect, useState, useContext } from 'react';
import './Header.css';
import SearchBar from './SearchBar';

function Header({ data }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className="bg-indigo-700 h-10 m-4 rounded-md flex justify-between px-2 items-center">
      <h1 className="font-semibold font-2xl text-white">🍿Movies</h1>
      <SearchBar inputRef={inputRef} />
      <p className="font-normal text-white text-[12px]">{`Found ${
        data?.data?.Search?.length || 0
      } results`}</p>
    </header>
  );
}

export default Header;
