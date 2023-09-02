import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Tamashii</h1>
      <p className="text-lg">
        Tamashii is an exciting project brought to life by a solo developer who shares a deep passion for anime. Inspired by platforms like MyAnimeList, Tamashii aims to create a united community for anime enthusiasts, offering features to save, rate, and comment on their favorite anime titles.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">Our Mission</h2>
      <p>
        In a world where anime is a shared passion, Tamashii seeks to unite fans in sharing experiences, opinions, and discovering new titles to watch. Registered users can enjoy all the project's features, while guests can explore comments, ratings, and general anime details without the need for registration.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">What We Offer</h2>
      <p>
        Harnessing the power of the Jikan API, Tamashii gains access to an extensive anime database. Users can search, view details, express opinions through ratings and comments, and curate a personalized list of their favorite anime.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">The Future of Tamashii</h2>
      <p>
        Currently, Tamashii is an evolving project nurtured by a passionate young developer. The future holds the promise of adding new features, such as anime trailers, user experience enhancements, and more. The passion for anime drives the growth trajectory of Tamashii.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-3">Join Our Community</h2>
      <p>
        We invite you to embark on this anime journey with us. Connect, engage, and share your love for anime through Tamashii. As a community, we're dedicated to fostering a welcoming space for anime enthusiasts to come together and celebrate their passion.
      </p>

      <div className="mt-8 text-center">
        <a
          href="/"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
