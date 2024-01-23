import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if the menu is not open
  if (!isMenuOpen) return null;

  return (
    <div className="p-10 w-72 shadow-lg ">
      <ul className="font-bold   ">
        <li className="mb-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-2">Shorts</li>
        <li className="mb-2">
          <Link to="/">Videos</Link>
        </li>
        <li>_____________________</li>
      </ul>

      <h1 className="font-bold mb-2 ">You ⌀</h1>

      <ul>
        <li className="mb-2">History</li>
        <li className="mb-2">Your videos</li>
        <li className="mb-2">Watch later</li>
        <li className="mb-2">Your Channel</li>
        <li className="mb-2">Liked Videos</li>
        <li className="mb-2">_____________________</li>
      </ul>

      <h1 className="font-bold mb-2 ">Explore⌀</h1>

      <ul>
        <li className="mb-2">Trending</li>
        <li className="mb-2">Shopping</li>
        <li className="mb-2">Music</li>
        <li className="mb-2">Movies</li>
        <li className="mb-2">Live</li>
        <li className="mb-2">Gaming</li>
        <li className="mb-2">News</li>
        <li className="mb-2">Sports</li>
        <li className="mb-2">Learning</li>
        <li className="mb-2">Podcasts</li>
        <li className="mb-2">_____________________</li>
      </ul>

      <h1 className="font-bold mb-2">More from YouTube</h1>

      <ul>
        <li className="mb-2">YouTube Premium</li>
        <li className="mb-2">YouTube Studio</li>
        <li className="mb-2">YouTube Music</li>
        <li className="mb-2">YouTube Kids</li>
      </ul>
    </div>
  );
}

export default SideBar;
