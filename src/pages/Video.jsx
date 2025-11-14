import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../data/videos";

const Video = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos.find((v) => String(v.id) === String(id));

  if (!video) {
    return (
      <div className="container max-w-1400 mx-auto px-default-x py-10">
        <p className="text-white">Video topilmadi.</p>
        <button
          className="mt-4 px-3 py-2 bg-blue-600 rounded"
          onClick={() => navigate(-1)}
        >
          Orqaga
        </button>
      </div>
    );
  }

  return (
    <div className="container max-w-1400 mx-auto px-default-x py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Player column */}
        <div className="w-full lg:w-2/3">
          {video.videoId ? (
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video bg-[#071026] rounded-lg flex items-center justify-center text-white text-xl">
              Video mavjud emas
            </div>
          )}
        </div>

        {/* Details column */}
        <aside className="w-full lg:w-1/3 text-white">
          <h1 className="text-lg font-semibold mb-2">{video.title}</h1>
          <p className="text-sm text-gray-300 mb-4">
            {video.views} · {video.uploaded}
          </p>
          <p className="text-sm text-gray-200 whitespace-pre-line">
            {video.description}
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Video;
