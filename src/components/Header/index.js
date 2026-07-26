import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-logo">NXTFLIX</h1>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <a href="/" className="header-link">Home</a>
            <a href="/" className="header-link">Watch Later</a>
          </nav>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
