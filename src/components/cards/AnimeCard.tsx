import Image from 'next/image';
import React from 'react';

interface AnimeImages {
  webp: {
    large_image_url: string;
  };
}

interface Anime {
  id: number;
  title: string;
  images: AnimeImages; // Correggi il tipo della proprietà images
  score: number;
}


interface AnimeCardProps {
  anime: Anime;
  onClick: (anime: Anime) => void;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, onClick }) => {
  return (
    <div className="border p-4 rounded" onClick={() => onClick(anime)}>
      <Image width={300} height={300} src={anime.images.webp.large_image_url} alt={anime.title} className="object-cover h-96 rounded mx-auto" />
      <h2 className="text-lg font-bold mt-4">{anime.title}</h2>
      <p className="text-sm mt-1">Score: {anime.score}</p>
    </div>
  );
};

export default AnimeCard;
