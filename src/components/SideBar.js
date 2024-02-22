import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is not open
  if (!isMenuOpen) return null;

  return (
    <div className="pl-10  py-1 shadow-lg w-[18rem] mt-[74px] fixed bg-white text-xl overflow-y-auto h-screen scrollbar-track-gray-400 ">
      <div className=" ">
        <ul className="font-bold">
          <li className="mb-[10px] text-md ">
            <Link to="/">▢ Home</Link>
          </li>
          <li className="mb-[14px]">◇ Shorts</li>
          <li className="">
            <Link to="/">▷ Videos</Link>
          </li>
          <li>_____________________</li>
        </ul>

        <h1 className="font-bold mb-[14px] ">◎ You </h1>

        <ul>
          <li className="mb-[14px]">↺ History</li>
          <li className="mb-[14px]">▷ Your videos</li>
          <li className="mb-[14px]">◷ Watch later</li>
          <li className="">_____________________</li>
        </ul>

        <div className="font-bold mb-[14px] flex">
          <img
            src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0wOS5wbmc.png"
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
