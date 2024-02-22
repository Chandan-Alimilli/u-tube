import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideroCont from "./VideroCont";
import { GOOGEL_API_KEY } from "../utils/contants";
import WatchVideos from "./WatchVideos";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // console.log(searchParams.get("v"), "id");
    fetchVideoDetails();
  }, [searchParams]);

  const fetchVideoDetails = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${searchParams.get(
        "v"
      )}&key=` + GOOGEL_API_KEY
    );

    const data = await response.json();
    console.log(data.items[0].snippet);
    setVideoDetails(data.items[0].snippet);
  };

  return (
    <div className="flex mt-[80px]">
      <div className="  rounded-lg p-[4px] ml-2  pl-2 shadow-md ">
        <iframe
          className="rounded-2xl shadow-xl"
          width="1120"
          height="620"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="rounded-xl shadow-xl pb-1 pl-1">
          <h2 className="font-bold text-2xl p-2 mt-2">{videoDetails.title}</h2>

          <div className="flex p-1">
            <p className=" font-serif text-xl mr-3 ml-2 mt-2 ">
              {videoDetails.channelTitle}
            </p>

            <button className=" bg-black  px-5 py-1  mr-[21rem] text-white rounded-full">
              Subscribe
            </button>

            <button className=" bg-gray-200  px-1   text-balck rounded-l-full border-black">
              👍🏿28k
            </button>

            <button className=" bg-gray-200  px-1  text-balck rounded-r-full mr-4 border-black">
              👎🏿 1.2k
            </button>

            <button className=" bg-gray-200  px-5 py-2  text-balck rounded-full mr-3">
              ⌀ Share
            </button>

            <button className=" bg-gray-200  px-5 py-2   rounded-full mr-3">
              ⇩ Download
            </button>

            <button className=" bg-gray-200 p-3   rounded-[90%]">•••</button>
          </div>

          <div className=" text-lg  line-clamp-4 mt-2 bg-gray-100 rounded-2xl  p-[6px] px-[6px] mx-2 mb-7 w-[69rem]   ">
            <p className="font-bold text-xl ml-2 ">4.1 M Views • 3 days ago</p>
            {videoDetails.description}
          </div>
        </div>
        <CommentsContainer />
      </div>
      {/* <div className="w-full">
        <LiveChat />
      </div> */}
      <WatchVideos />
    </div>
  );
}

export default WatchPage;
