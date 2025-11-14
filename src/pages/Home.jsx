import React, { useState } from "react";
import Logo from "../assets/img/Logo.png";
import Home_img from "../assets/img/profil.png";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "YOTUBE",
  "INSTAGRAM",
  "TIKTOK",
  "NETFLEX",
  "TWITTER",
  "SPOTIFY",
  "DECKORD",
  "TESLA",
  "New to you",
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(`Selected category: ${category}`);
  };

  return (
    <div>
      <section className="home">
        <div className="container max-w-1400 mx-auto px-default-x">
          <div className="flex flex-col items-center">
            <nav className="flex items-center justify-between p-[10px] w-full bg-black sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <button      className="btn_home p-2">
                  <i className="fa-solid fa-bars text-white cursor-pointer"></i>
                </button>
                <a href="/">
                  <img src={Logo} alt="YouTube Logo" className="h-15" />
                </a>
              </div>

              <div className="flex items-center gap-1 max-w-xl flex-grow mx-4">
                <div className="search flex items-center flex-grow">
                  <input
                    className="p-3 text-white border border-[#303030] bg-black flex-grow rounded-l-full focus:outline-none"
                    type="search"
                    placeholder="Search"
                  />
                  <button className="search_btn w-[60px] h-[50px] bg-[#303030] p-2 cursor-pointer rounded-r-full hover:bg-zinc-700 transition">
                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                  </button>
                </div>
                <button className="w-[40px] h-[40px] bg-black p-1 cursor-pointer rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
                  <i className="fa-solid fa-microphone text-white text-lg"></i>
                </button>
              </div>

              <div className="flex items-center gap-[10px]">
                <button className="w-[40px] h-[40px] p-2 hover:bg-zinc-800 rounded-full transition">
                  <i className="fas fa-plus-square text-white cursor-pointer text-lg"></i>
                </button>
                <button className="w-[40px] h-[40px] p-2 cursor-pointer hover:bg-zinc-800 rounded-full transition">
                  <i className="fas fa-th text-white text-lg"></i>
                </button>
                <button className="w-[40px] h-[40px] p-2 cursor-pointer hover:bg-zinc-800 rounded-full transition">
                  <i className="fas fa-bell text-white text-lg"></i>
                </button>
                <button
                  id="home_btns"
                  className="w-[102px] h-[32px] gap-1 cursor-pointer bg-blue-700 text-amber-50 flex items-center justify-center rounded-[10px] overflow-hidden"
                  onClick={() => navigate("/login")}
                >
                  sign up
                  <span>
                    <i className="fa-solid fa-arrow-right text-amber-50"></i>
                  </span>
                </button>
              </div>
            </nav>

            <div className="flex items-center space-x-3 p-3 bg-black overflow-x-auto scrollbar-hide sticky top-[70px] z-10 w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition duration-200
                    ${
                      activeCategory === category
                        ? "bg-white text-black"
                        : "bg-zinc-700 text-white hover:bg-zinc-600"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container max-w-1400 mx-auto px-default-x p-4">
        <h2 className="text-white mt-4">
          Kontentlar: {activeCategory} bo'yicha
        </h2>
      </main>
    </div>
  );
};

export default Home;
