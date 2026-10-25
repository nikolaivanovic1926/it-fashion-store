import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./api/apiClient";
import { useAuth } from "./context/AuthContext";
import "./Form.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill in email and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await loginUser({
        username: email,
        email: email,
        password: password,
      });
      console.log(data);
    login(data);
      navigate("/");
    } catch (err) {
      setError("Login failed. Check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <h1 className="form-title">Login</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="email">Email</label>
        <input
          id="email"
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="form-label" htmlFor="password">Password</label>
        <input
          id="password"
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="form-error">{error}</p>}

        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Logging in…" : "LOGIN"}
        </button>

        <p className="form-bottom-text">
          Or <Link to="/register">Create an Account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;