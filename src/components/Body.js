import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Body() {
  return (
    <div className="flex bg-[#1d2e2b]">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Body;
