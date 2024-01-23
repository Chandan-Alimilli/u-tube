import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constans";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
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
    console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-purpel">
      {/* <Logo/> */}
      {/* menu icon  */}
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          className="h-11 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        {/* logo */}

        <img
          alt="logo"
          className=" h-6  mt-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/YouTube_logo_%282017%29.png/640px-YouTube_logo_%282017%29.png"
        />
      </div>
      {/* <Search/> */}
      {/* sarch bar section */}
      <div className="col-span-10 px-20 flex">
        <input
          type="text"
          placeholder="seacrh..."
          className=" w-1/2 p-2 border border-gray-400 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* <Icons/> */}
      <div className="col-span-1 flex">
        <img
          className="h-10 pl-6 pt-1 cursor-pointer"
          alt="cam+"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFSaw6HbNoVtD1imPVPq7_XunF_k0uDavtme86D6kiB3ZAoLD9G5CVRWIko2GZpBap_s&usqp=CAU"
        />
        <img
          className="h-10 pt-1 p-1 pl-6 cursor-pointer"
          alt="notifications"
          src="https://ongpng.com/wp-content/uploads/2023/10/bell-icon-with-one-notification-1.png"
        />
        <img
          alt="user"
          className="h-10 p-1  pl-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
        />

        <img
          className="h-9  pl-5 cursor-pointer"
          alt="settings"
          src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
        />
      </div>
    </div>
  );
}

export default Header;
