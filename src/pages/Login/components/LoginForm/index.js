import './index.css';

function LoginForm() {
  return (
    <div className="login-form-wrapper">
      <div className="login-card">
        <h2 className="login-heading">Sign In</h2>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
          />
        </div>

        <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  );
}

export default LoginForm;
