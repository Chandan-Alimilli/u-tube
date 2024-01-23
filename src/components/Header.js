import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constans";
import Logo from "./Logo";
import Icons from "./Icons";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    console.log(searchQuery);

    const timer = setTimeout(() => {
      getSearchSugsetions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsetions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg   bg-white w-full  ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-11 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        {/* logo */}
        <Logo />
      </div>

      <div className="col-span-10 ">
        <div className="flex">
          <input
            type="text"
            placeholder="seacrh..."
            className=" w-2/3 p-3 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="  p-2 border border-gray-400 rounded-r-full bg-gray-100">
            <img
              className="h-5"
              src="https://banner2.cleanpng.com/20180623/rxj/kisspng-computer-icons-desktop-wallpaper-search-box-materi-verification-5b2e87fc57ea79.6293592815297761243601.jpg"
              alt="sarch-logo"
            />
          </button>
          <img
            alt="mic"
            src="https://icon2.cleanpng.com/20180705/gey/kisspng-microphone-computer-icons-icon-design-voice-icon-5b3e5f5eb07eb0.3351359715308143027229.jpg"
            className="rounded-full  h-11 p-2  bg-gray-100 cursor-pointer"
          />
        </div>
        {showSuggestions && (
          <div className=" p-2 pr-[37rem] fixed shadow-lg rounded-lg bg-white border-gray-200  ">
            <ul className="">
              {suggestions.map((s) => (
                <li key={s} className="py-2    hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <Icons/> */}
      <Icons />
    </div>
  );
}

export default Header;
