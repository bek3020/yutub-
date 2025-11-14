import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3000/users");
      const user = res.data.find(
        (u) => u.username === form.username && u.password === form.password
      );

      if (user) {
        alert("Login successful ");
      } else {
        alert("Username or password incorrect ");
      }
    } catch (error) {
      console.error(error);
      alert("Server bilan bog‘lanishda xato yuz berdi.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <a
        className="w-[40px] h-[40px] bg-black rounded-2xl flex items-center justify-center"
        href="/"
      >
        <i class="fa-solid fa-arrow-left text-amber-50"></i>
      </a>
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Login to YouTube
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/register")}
          className="mt-4 text-center text-gray-400 hover:text-white cursor-pointer select-none"
        >
          Don't have an account? Register
        </p>
      </form>
    </div>
  );
}
