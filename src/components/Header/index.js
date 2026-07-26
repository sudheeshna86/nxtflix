import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useWatchLater } from '../../context/WatchLaterContext';
import './index.css';

function Header() {
  const navigate = useNavigate();
  const { watchLater } = useWatchLater();
  const hasWatchLaterItems = watchLater.length > 0;

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/login', { replace: true });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-logo">NXTFLIX</Link>
        </div>

        <div className="header-right">
          <nav className="header-nav">
            <Link to="/" className="header-link">Home</Link>
            <Link to="/watch-later" className="header-link">
              Watch Later
              {hasWatchLaterItems ? <span className="watch-later-badge">{watchLater.length}</span> : null}
            </Link>
          </nav>
          <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
