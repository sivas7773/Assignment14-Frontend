import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {baseUrl} from "../api";
function Resiger() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${baseUrl}/auth/register`,form);
    navigate("/");
  };

  return (
    <div>
      <div className="p-6 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Sign Up Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="border px-3 w-full"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="border px-3 w-full"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border px-3 w-full"
            placeholder="password"
          />
          <select
            name="role"
            id=""
            onChange={handleChange}
            className="border px-3 w-full"
          >
            <option value="">----select Role----</option>
            <option value={"Buyer"}>Buyer</option>
            <option value={"Seller"}>Seller</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-1 px-3 mb-4"
          >
            SignUp
          </button>
        </form>
        <p>
          Already have account ?
          <Link to="/" className="text-blue-500 font-bold">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Resiger;
