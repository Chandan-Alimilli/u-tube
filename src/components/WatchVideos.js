import { useEffect, useState } from "react";
import { MOST_LIKED_VIDEOS } from "../utils/contants";
import { Link } from "react-router-dom";

function WatchVideos() {
  const [WatchVideo, setWatchVideo] = useState([]);

  useEffect(() => {
    mostLIkedVideos();
  }, []);

  const mostLIkedVideos = async () => {
    const data = await fetch(MOST_LIKED_VIDEOS);
    const json = await data.json();
    console.log(json.items, "liked videos");
    setWatchVideo(json.items);
  };
  return (
    <div className="p-3 rounded-xl shadow-lg">
      {WatchVideo.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <WatchVideosCards video={video} />
        </Link>
      ))}
    </div>
  );
}

function WatchVideosCards({ video }) {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex p-[4px] ">
      <img
        className="rounded-xl  w-[200px]  "
        src={thumbnails.medium.url}
        alt="img"
      />
      <ul className="grid p-1">
        <li className="font-bold p-1 text-md line-clamp-2">{title}</li>
        <li className="text-[#52a447]">{channelTitle} </li>
        <li>
          {statistics.viewCount} Views • {statistics.likeCount} Likes
        </li>
      </ul>
    </div>
  );
}

export default WatchVideos;
