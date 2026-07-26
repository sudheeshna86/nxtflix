import './index.css';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img
        src="https://picsum.photos/seed/nxtflixhero/1600/900"
        alt="Hero Banner"
        className="hero-image"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-heading">Discover your next favourite</h1>
        <p className="hero-description">
          Browse 50+ titles across every genre. Add to Watch Later and pick up anytime.
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
