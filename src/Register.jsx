import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./api/apiClient";
import "./Form.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (
      password.length < 8 ||
      password.length > 25 ||
      !/[0-9]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      newErrors.password =
        "Password needs 8-25 characters, 1 number, 1 uppercase and 1 lowercase letter.";
    }

    if (birthDate === "") {
      newErrors.birthDate = "Enter your date of birth.";
    }

    if (!accepted) {
      newErrors.accepted = "You must accept the Terms and Conditions.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setServerError("");
    setLoading(true);

    try {
      await registerUser({
        username: email,
        email: email,
        password: password,
      });
      navigate("/login");
    } catch (err) {
      setServerError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <h1 className="form-title">Create an Account</h1>

      <form className="form-box" onSubmit={handleSubmit} noValidate>
        <label className="form-label" htmlFor="email">Email *</label>
        <input
          id="email"
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}

        <label className="form-label" htmlFor="password">Create a password *</label>
        <input
          id="password"
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="form-hint">8-25 characters only 1 number 1 uppercase 1 lowercase</p>
        {errors.password && <p className="form-error">{errors.password}</p>}

        <label className="form-label" htmlFor="birthDate">Date of birth *</label>
        <input
          id="birthDate"
          className="form-input"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        {errors.birthDate && <p className="form-error">{errors.birthDate}</p>}

        <label className="form-check">
          <input type="checkbox" />
          I would like to receive personalized promotions
        </label>

        <label className="form-check">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          I agree and accept the Terms and Conditions
        </label>
        {errors.accepted && <p className="form-error">{errors.accepted}</p>}

        {serverError && <p className="form-error">{serverError}</p>}

        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Creating…" : "CREATE AN ACCOUNT"}
        </button>

        <Link to="/login" className="form-button-outline">BACK TO LOGIN</Link>
      </form>
    </div>
  );
}

export default Register;