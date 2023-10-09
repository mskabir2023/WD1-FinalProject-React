import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setToken } from "../services/network";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login(user);
    if (res.success) {
      const token = res.data;
      setToken(token);
      navigate("/");
    } else {
      setErrorMessage(res.error);
    }
  };

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrorMessage(null);
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />
        {errorMessage && <label className="errorMessage">{errorMessage}</label>}
        <div className="form-group">
          <label>Email</label>
          <input
            value={user.email}
            onChange={change}
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            value={user.password}
            onChange={change}
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <div className="d-grid mb-2">
          <input
            type="submit"
            value="Login"
            className="btn-lg-su btn btn-primary btn-lg"
          />
        </div>
      </form>
    </div>
  );
}
