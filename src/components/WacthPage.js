import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideroCont from "./VideroCont";
import { GOOGEL_API_KEY } from "../utils/constans";

function WacthPage() {
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    console.log(searchParams.get("v"), "id");
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
    <div className="flex">
      <div className=" shadow-xl rounded-lg p-5 ">
        <iframe
          className="rounded-xl"
          width="1200"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h2 className="font-bold text-2xl p-2">{videoDetails.title}</h2>
      </div>

      <p className=" font-serif text-lg">{videoDetails.channelTitle}</p>
      {/* <VideroCont className="grid shadow-xl line-clamp-2 h-40 w-40" /> */}
    </div>
  );
}

export default WacthPage;
