import React, { useState } from "react";
import axios from "axios";
import {baseUrl} from "../api";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, form);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
     setError("invalid credendials")
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border px-3 w-full"
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          className="border px-3 w-full"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        {error &&<p className="text-red-500" > {error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Login
        </button>
      </form>
      <p>
        Don't have account?{" "}
        <Link to="/register" className="text-blue-500 font-bold"> Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
