import React from 'react';
import { useState } from 'react';

const BASE_URL = 'https://v2.jokeapi.dev/joke/Any?';

type JOKE = {
  id: 'number';
  safe: boolean;
  lang: 'cs' | 'de' | 'en' | 'es' | 'fr' | 'pt';
};

export default function Form() {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <form onSubmit={getJokes}>
        <input
          type="text"
          placeholder="Search..."
          value="search"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
