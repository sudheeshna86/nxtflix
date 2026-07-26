import { Link } from 'react-router-dom';
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
            <Link to="/" className="header-link">Home</Link>
            <Link to="/watch-later" className="header-link">
              Watch Later
              {hasWatchLaterItems ? <span className="watch-later-badge">{watchLater.length}</span> : null}
            </Link>
          </nav>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
