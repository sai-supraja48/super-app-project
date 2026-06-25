import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";
import { validateForm } from "../utils/validation";
import "../styles/register.css";

function Register() {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUser(formData);
    navigate("/categories");
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="overlay">
          <h1>
            Discover new things on <br /> Super App
          </h1>
        </div>
      </div>

      <div className="register-right">
        <h1 className="logo">Super App</h1>

        <p className="subtitle">Create your new account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="error">{errors.username}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && (
            <p className="error">{errors.mobile}</p>
          )}

          <button className="register-btn">
            Sign Up
          </button>
        </form>

        <div className="terms">
          By clicking Sign Up you agree to our
          <span> Terms & Conditions </span>
          and
          <span> Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}

export default Register;