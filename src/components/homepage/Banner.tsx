const Banner = () => {
    return (
      <div className="bg-center bg-cover h-72 relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1613376023733-0a73315d9b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80 )' }}>
        <div className="bg-black"></div>
        <div className="flex flex-col items-center justify-center mx-2 space-y-4 absolute inset-0">
          <h1 className="text-3xl text-white font-bold">
            Welcome to Tamashii
          </h1>
          <p className="text-md text-white px-12">
            Your go-to platform for discovering, tracking, and discussing anime.
          </p>
        </div>
      </div>
    );
  };
  
  export default Banner;
  