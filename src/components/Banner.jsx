

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/mSsXjWk/bannermedia.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Entertainment & Media Store</h1>
      <p className="mb-5">
        Where Entertainment Meets Elegance! Dive into a world of endless media possibilities. Discover the latest movies, music, games, and more, all in one place. Immerse yourself in the ultimate entertainment experience tailored just for you. Explore, indulge, and let the magic begin!
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;