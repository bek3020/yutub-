import React from "react";
import { useNavigate } from "react-router-dom";
import { videos } from "../data/videos";

// Ikonka ranglari uchun oddiy xarita (Ma'lumotlar massivida saqlash shart emas)
const iconColors = {
  YouTube: "bg-red-600",
  Instagram: "bg-fuchsia-600",
  TikTok: "bg-cyan-500",
  Netflix: "bg-red-700",
  Twitter: "bg-blue-500",
  Spotify: "bg-green-500",
  Discord: "bg-indigo-600",
  Tesla: "bg-red-800",
};

// Avatar ranglari uchun oddiy xarita
const avatarColors = {
  "James Gouse": "bg-pink-500",
  "Alan Cooper": "bg-orange-400",
  "Marcus Levin": "bg-yellow-600",
  "Alexis Sears": "bg-amber-700",
  "Jessica Lambert": "bg-red-500",
  "Anna White": "bg-yellow-500",
  "Skylar Bias": "bg-emerald-600",
};

const Cards = () => {
  const navigate = useNavigate();
  return (
    // Asosiy konteyner — qora fon ichida grid
    <div className="bg-black py-6 sm:py-8">
      <div className="container max-w-1400 mx-auto px-default-x">
        {/* Grid: 1 / 2 / 4 ustunlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((item, index) => (
            <article
              key={index}
              className="group cursor-pointer text-white"
              onClick={() => navigate(`/video/${item.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/video/${item.id}`);
              }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                {/* Background gradient + subtle noise-like band to mimic the mockup */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#071026] via-[#0f2a3a] to-[#071026] flex items-center justify-center">
                  {/* Central icon block (3D-ish) */}
                  <div
                    className={`w-2/5 h-2/5 rounded-2xl flex items-center justify-center text-4xl font-extrabold shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${
                      iconColors[item.iconName] || "bg-gray-600"
                    }`}
                  >
                    {item.iconName.charAt(0)}
                  </div>
                </div>

                {/* Time badge bottom-right */}
                <span className="absolute bottom-3 right-3 bg-black/80 text-xs text-white px-2 py-0.5 rounded">
                  {item.time}
                </span>

                {/* subtle top-left brand tag (optional) */}
                <span className="absolute top-3 left-3 bg-white/5 text-[11px] text-gray-200 px-2 py-0.5 rounded">
                  {item.iconName}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Meta row */}
              <div className="flex items-start gap-3 mt-3">
                {/* Avatar (colored circle) */}
                <div
                  className={`${
                    avatarColors[item.author] || "bg-gray-500"
                  } w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shrink-0`}
                >
                  {item.author
                    .split(" ")
                    .map((n) => n.charAt(0))
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold leading-tight mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">
                    {item.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.views} · {item.uploaded}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
