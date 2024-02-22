import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import Logo from "./Logo";
import Icons from "./Icons";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSugsetions();
    }, 200);
    console.log(timer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsetions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();
      console.log(json, "search");
      setSuggestions(json[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2   shadow-sm fixed  bg-white  w-full  ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-11 cursor-pointer mr-3"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <Logo />
      </div>

      <div className="col-span-10 ">
        <div className="flex ml-[15rem] p-1">
          <input
            type="text"
            placeholder="  Search"
            className=" w-2/3 pl-3 border border-gray-400 rounded-l-full text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <a href="/icons">
            <button className="  p-3 border border-gray-400 rounded-r-full bg-gray-100">
              <img
                className="h-5"
                src="https://banner2.cleanpng.com/20180623/rxj/kisspng-computer-icons-desktop-wallpaper-search-box-materi-verification-5b2e87fc57ea79.6293592815297761243601.jpg"
                alt="sarch-logo"
              />
            </button>
          </a>

          <img
            alt="mic"
            src="https://icon2.cleanpng.com/20180705/gey/kisspng-microphone-computer-icons-icon-design-voice-icon-5b3e5f5eb07eb0.3351359715308143027229.jpg"
            className="rounded-full  h-11 p-[8px]  ml-4 bg-gray-100 cursor-pointer"
          />
        </div>
        {showSuggestions && (
          <div className=" p-2 pr-[34rem] ml-[15rem] fixed shadow-lg rounded-lg bg-white border-gray-200  ">
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
