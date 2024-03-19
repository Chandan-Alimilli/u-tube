import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is not open
  if (!isMenuOpen) return null;

  return (
    <div className="pl-10 py-1 shadow-lg w-[17rem] mt-[74px] fixed bg-[#1d2e2b] text-lg h-screen overflow-y-auto scrollbar-thumb-black scrollbar-track-black ">
      <div className=" ">
        <ul className="font-bold">
          <li className="mb-[10px] text-md ">
            <Link to="/">▢ Home</Link>
          </li>
          <a href="https://www.youtube.com/shorts/UfciY8tjLEc">
            <li className="mb-[14px]">◇ Shorts</li>
          </a>

          <li className="">
            <Link to="/">▷ Videos</Link>
          </li>
          <li>_____________________</li>
        </ul>

        <h1 className="font-bold mb-[14px] ">◎ App Devloper </h1>

        <ul>
          <a href="https://chandan08.netlify.app/">
            <li className="mb-[14px] ml-8 font-semibold"> portfolio</li>
          </a>

          <li className="mb-[14px] ml-8 font-semibold"> Linkden</li>
          <li className="mb-[14px] ml-8 font-semibold">Github</li>
          <li className="">_____________________</li>
        </ul>

        <div className="font-bold mb-[14px] flex">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            // alt="icon"
            className="  mr-1 h-[25px]"
          />
          YouTube
        </div>

        <ul>
          <li className="mb-[14px]">⁜ YouTube Premium</li>
          <li className="mb-[14px]">◉ YouTube Studio</li>
          <li className="mb-[14px]">♪ YouTube Music</li>
          <li className="">_____________________</li>
        </ul>

        <h1 className="font-bold mb-[14px] ">⌀ Explore</h1>

        <ul>
          <li className="mb-[14px]">♪ Music</li>
          <li className="mb-[14px]">⊚ Live</li>
          <li className="mb-[14px]">⩎ News</li>
          <li className="mb-[14px]">ँ Sports</li>
          <li className="mb-[14px]">⪨ Learning</li>
          <li className="mb-[14px]">⩄ Podcasts</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
