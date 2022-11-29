import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://v2.jokeapi.dev/joke/Any';

type JOKE = {
  id: 'number';
  safe: boolean;
  lang: 'cs' | 'de' | 'en' | 'es' | 'fr' | 'pt';
  type: 'single' | 'twopart';
  setup?: string;
  delivery?: string;
  joke?: string;
  flags: Flag;
  category:
    | 'Any'
    | 'Misc'
    | 'Programming'
    | 'Dark'
    | 'Pun'
    | 'Spooky'
    | 'Christmas';
};

type Flag = {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};

export default function Form() {
  const [search, setSearch] = useState('');
  const [jokes, setJokes] = useState<JOKE[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;

    const { data } = await axios.get(ENDPOINT);
    console.log(data);
    console.log(ENDPOINT);
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
    </>
  );
}
