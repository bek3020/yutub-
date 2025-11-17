import React, { useState } from "react";
import { LogIn, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- qo'shildi

const LOCAL_DATA = {
  users: [{ id: 1, username: "admin", password: "123456" }],
};

const MessageBox = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-sm w-full border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Xabar</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

const Login = ({ onLoginSuccess }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [localMessage, setLocalMessage] = useState(null);
  const navigate = useNavigate(); // <-- navigatsiyani olish

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = LOCAL_DATA.users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (user) {
      setLocalMessage(
        "Muvaffaqiyatli login! Bosh sahifaga yo'naltirilmoqda..."
      );
      onLoginSuccess?.({ uid: user.id, username: user.username });

      // localStorage ga user ma'lumotini saqlash
      localStorage.setItem(
        "user",
        JSON.stringify({ uid: user.id, username: user.username })
      );

      setTimeout(() => navigate("/"), 1000); // Home sahifaga yo'naltirish
    } else {
      setLocalMessage("Foydalanuvchi nomi yoki parol noto'g'ri.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <MessageBox
        message={localMessage}
        onClose={() => setLocalMessage(null)}
      />
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Kirish
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Foydalanuvchi nomi
          </label>
          <input
            type="text"
            name="username"
            placeholder="admin"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Parol
          </label>
          <input
            type="password"
            name="password"
            placeholder="123456"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <LogIn className="w-5 h-5" /> Kirish
        </button>

        <p
          onClick={() => navigate("/register")}
          className="mt-6 text-center text-gray-400 hover:text-white cursor-pointer transition text-sm"
        >
          Hisobingiz yo'qmi? Ro'yxatdan o'tish
        </p>
      </form>
    </div>
  );
};

export default Login;
