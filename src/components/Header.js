import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import Logo from "./Logo";
import Icons from "./Icons";

function Header() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2   shadow-sm fixed  bg-[#1d2e2b]  w-full  border-[#52a447] border-y-1 ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-10 cursor-pointer mr-5 ml-5 mt-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />

        <Logo />
      </div>

      <div className="col-span-10  felx text-center mt-3">
        <a href="/">
          <span className="text-3xl ml-14 mt-3 text-center font-bold text-[#52a447]">
            {" "}
            Video
          </span>
          <span className="text-3xl  mt-3 text-center font-bold text-black ">
            {" "}
            Verse
          </span>
        </a>
      </div>
      {/* <Icons/> */}
      {/* <Icons /> */}
      <a href="/icons">
        <button className="text-xl font-bold mt-3 text-[#52a447]">
          About App
        </button>
      </a>
    </div>
  );
}

export default Header;
