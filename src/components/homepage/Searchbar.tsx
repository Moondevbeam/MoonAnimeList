import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from '@/components/cards/AnimeCard';

interface Anime {
  id: number;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  score: number;
}


const SearchBarWithResults: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchAnime = async () => {
      if (searchValue === '') return;

      try {
        const response = await axios.get(`/api/searchAnime?q=${searchValue}`);
        setAnimeList(response.data);
      } catch (error) {
        console.log('Failed to fetch data', error);
      }
    };

    const debounce = setTimeout(fetchAnime, 300);
    return () => clearTimeout(debounce);
  }, [searchValue]);

  return (
    <div>
      <div className='flex justify-center my-4'>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search anime"
        className='px-8 py-2 text-xl rounded-xl text-black font-semibold'
      />
      </div>
      <div className="grid grid-cols-4 gap-4 mx-4">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} onClick={() => console.log('Clicked', anime.title)} />
        ))}
      </div>
    </div>
  );
};

export default SearchBarWithResults;
