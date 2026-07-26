import BrandSection from './components/BrandSection';
import LoginForm from './components/LoginForm';
import './index.css';

function Login() {
  return (
    <div className="login-container">
      <BrandSection />
      <LoginForm />
    </div>
  );
}

export default Login;