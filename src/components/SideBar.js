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
            <Link to="/">
              {" "}
              <span className="text-[#52a447]">▢</span> Home
            </Link>
          </li>
          <a href="https://www.youtube.com/shorts/UfciY8tjLEc">
            <li className="mb-[14px]">
              <span className="text-[#52a447]">◇</span> Shorts
            </li>
          </a>

          <li className="">
            <Link to="/">
              {" "}
              <span className="text-[#52a447]">▷</span> Videos
            </Link>
          </li>
          <li>_____________________</li>
        </ul>

        <h1 className="font-bold mb-[14px] ">
          <span className="text-[#52a447]">◎</span> App Devloper{" "}
        </h1>

        <ul>
          <a href="https://chandan08.netlify.app/">
            <li className="mb-[14px] ml-4 font-semibold"> Portfolio</li>
          </a>
          <a href="https://www.linkedin.cohttps://www.linkedin.com/in/chandan-allimilli/">
            <li className="mb-[14px] ml-4 font-semibold"> Linkden</li>
          </a>

          <a href="https://github.com/Chandan-Alimilli">
            <li className="mb-[14px] ml-4 font-semibold">Github</li>
          </a>

          <li className="">_____________________</li>
        </ul>

        <div className="font-bold mb-[14px] flex">
          <span className="text-[#52a447]">⩎ </span> Tech Stack
        </div>

        <ul>
          <li className="mb-[14px] font-semibold ml-4">React JS</li>
          <li className="mb-[14px] font-semibold ml-4">Redux(RKT)</li>
          <li className="mb-[14px] font-semibold ml-4">React-Router-Dom</li>
          <li className="mb-[14px] font-semibold ml-4">Tailwind CSS</li>
          <li className="mb-[14px] font-semibold ml-4">JavaScript</li>
          <li className="">_____________________</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
