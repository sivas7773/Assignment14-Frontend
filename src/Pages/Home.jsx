import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../api";
import { FaTrash } from "react-icons/fa";
function Home() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [form, setForm] = useState({
    name: "",
    address: "",
    status: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(`${baseUrl}/customer`, form);

      setForm({
        name: "",
        address: "",
        status: "",
      });
      alert(res.data.message);
      fetchcustomer();
    } catch (err) {
      console.error(err);
    }
  };

  const [customer, setcustomer] = useState([]);
  const fetchcustomer = async () => {
    try {
      const res = await axios.get(`${baseUrl}/customer`);
      setcustomer(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchcustomer();
  }, []);
  console.log(customer);

  const HandleDelete = (Id) => {
    try {
      const res = axios.delete(`${baseUrl}/customer/` + Id);
   
      fetchcustomer();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <nav className="flex justify-between p-4 bg-slate-800 text-white">
        <h1>Dashboard</h1>
        <button
          onClick={handleLogOut}
          className="bg-red-200 px-4 py-1 rounded text-black cursor-pointer font-semibold"
        >
          Log out
        </button>
      </nav>

      <div className="p-6 max-w-sm mx-auto bg-gray-50 m-3">
        <h2 className="text-xl font-bold mb-4">Customer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="border px-3 w-full"
            placeholder="Name"
          />
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="border px-3 w-full"
            placeholder="address"
          />
          <select
            name="status"
            id=""
            onChange={handleChange}
            className="border px-3 w-full"
          >
            <option value="">----select status----</option>
            <option value={"Finished"}>Finished</option>
            <option value={"Assingned"}>Assingned</option>
            <option value={"Pending"}>Pending</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded py-1 px-3 mb-4"
          >
            Save
          </button>
        </form>
      </div>
      <div className="p-4">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-4 ">
          {customer.map((data) => (
            <div
              key={data.customerId}
              className="bg-gray-100 p-4 rounded cursor-pointer"
            >
              <div className="flex justify-between">
                <h1>{data.name}</h1>
                <button
                  className="cursor-pointer"
                  onClick={() => HandleDelete(data._id)}
                >
                  <FaTrash />
                </button>
              </div>
              <p>{data.address}</p>
              <h4>{data.status}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
