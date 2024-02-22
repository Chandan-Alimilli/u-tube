import { useEffect, useState } from "react";
import { YOUBUTE_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCont from "./Shimmer";

function VideroCont() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUBUTE_API);
      const json = await data.json();
      setVideos(json.items);
      // console.log(json.items);
    } catch (error) {
      console.log(error.message || "Error fetching videos");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ShimmerCont />;

  return (
    <div className="flex flex-wrap p-[10px] w-[90em]">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard cards={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideroCont;
