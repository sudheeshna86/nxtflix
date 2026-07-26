import { useNavigate } from 'react-router-dom';
import './index.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-panel">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-description">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          type="button"
          className="back-home-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default NotFound 