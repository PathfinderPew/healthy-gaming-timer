import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr]           = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav('/dashboard');
    } catch (e) {
      setErr('Invalid credentials');
    }
  };

  return (
    <main className="centered">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button>Login</button>
        {err && <p className="error">{err}</p>}
      </form>
      <p>
        Need an account? <a href="/register">Register</a>
      </p>
    </main>
  );
}
