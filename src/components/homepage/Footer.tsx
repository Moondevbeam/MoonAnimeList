import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Tamashii - AnimeList</p>
      </div>
    </footer>
  );
};

export default Footer;
