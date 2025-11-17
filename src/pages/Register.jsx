import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Foydalanuvchilar ro'yxatini olish
      const res = await axios.get("http://localhost:8000/users");
      const userExists = res.data.some((u) => u.username === form.username);

      if (userExists) {
        alert("Username already taken");
        return;
      }

      // Yangi foydalanuvchini qo'shish
      const newUser = { username: form.username, password: form.password };
      await axios.post("http://localhost:8000/users", newUser);

      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      alert("Error connecting to server.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleRegister}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-6 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition">
          Register
        </button>

        <p
          onClick={() => navigate("/login")}
          className="mt-4 text-center text-gray-400 hover:text-white cursor-pointer"
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}
