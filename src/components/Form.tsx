import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import JokeItem from './JokeItem';

import { Joke, Flag, Category } from '../common/types';

export default function Form() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const BASE_URL = 'https://v2.jokeapi.dev/joke/Any';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);
    console.log(data);
    console.log(ENDPOINT);

    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes);
    }
    setSearch('');
  };

  return (
    <>
      <form onSubmit={getJokes}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {error && <p>Sorry no jokes were found</p>}
        {jokes.length > 0 &&
          jokes.map((joke) => <JokeItem joke={joke} key={joke.id} />)}
      </div>
    </>
  );
}
