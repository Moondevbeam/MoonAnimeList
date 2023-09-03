import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto text-center">
        <p className="text-md">{new Date().getFullYear()} Tamashii - AnimeList</p>
      </div>
    </footer>
  );
};

export default Footer;
