import { useWatchLater } from '../../context/WatchLaterContext';
import './index.css';

function Header() {
  const { watchLater } = useWatchLater();
  const hasWatchLaterItems = watchLater.length > 0;

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="header-logo">NXTFLIX</h1>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <a href="/" className="header-link">Home</a>
            <a href="/" className="header-link">
              Watch Later
              {hasWatchLaterItems ? <span className="watch-later-badge">{watchLater.length}</span> : null}
            </a>
          </nav>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
