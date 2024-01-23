import { useEffect, useState } from "react";
import { YOUBUTE_API } from "../utils/constans";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideroCont() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUBUTE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap p-5">
      {videos.map((video) => (
        <Link key={video.id} to={"/wacth?v=" + video.id}>
          <VideoCard cards={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideroCont;
