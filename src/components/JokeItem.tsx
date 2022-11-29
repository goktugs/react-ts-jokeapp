import React from 'react';
import { Joke, Flag, Category, FlagKeys } from '../common/types';

interface JokeItemProps {
  joke: Joke;
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
  const flags = Object.keys(joke.flags)
    .filter((key) => joke.flags[key as FlagKeys])
    .join(' , ');

  return (
    <>
      <div>
        {joke.type === 'single' ? (
          <p> {joke.joke} </p>
        ) : (
          <>
            {joke.setup}
            {joke.delivery}
          </>
        )}
      </div>
      <p> {joke.category} </p>
      <p> {flags} </p>
    </>
  );
};

export default JokeItem;
