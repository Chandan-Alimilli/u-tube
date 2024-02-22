import { Link } from "react-router-dom";
import Icons from "./Icons";

function Maintenance() {
  return (
    <div className="ml-[15rem] pl-14 h-screen">
      {/* <Link to="/"> */}
      <img
        src="https://img.freepik.com/free-vector/coming-soon-paint-brush-stroke_78370-1125.jpg"
        alt="coming soon "
        className=" w-[33%] ml-[28rem]    "
      />
      <div className=" font-bold ml-[29rem] text-lg">
        <div className=" mb-4 flex">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="icon"
            className=" mr-[16px] h-[30px]"
          />

          <p>we are working on this icons and buttons functionality</p>
        </div>

        {/* <Icons /> */}
        <div className="col-span-1 flex ml-[100px]">
          <a href="/icons">
            {" "}
            <img
              className="h-10 pl-8 pt-1 cursor-pointer"
              alt="cam+"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFSaw6HbNoVtD1imPVPq7_XunF_k0uDavtme86D6kiB3ZAoLD9G5CVRWIko2GZpBap_s&usqp=CAU"
            />
          </a>

          <a href="/icons">
            {" "}
            <img
              className="h-10 pt-1 p-1 pl-8 cursor-pointer"
              alt="notifications"
              src="https://ongpng.com/wp-content/uploads/2023/10/bell-icon-with-one-notification-1.png"
            />
          </a>

          <a href="/icons">
            <img
              alt="user"
              className="h-10 p-1  pl-8 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            />
          </a>

          <a href="/icons">
            <img
              className="h-9  pl-8 cursor-pointer"
              alt="settings"
              src="https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png"
            />
          </a>
        </div>
        {/* // button */}
      </div>
      <div className="flex mt-5 ml-12">
        <button className="  bg-gray-200  px-5  mr-[3rem] ml-9 rounded-full">
          Subscribe
        </button>

        <button className=" bg-gray-200  px-5 py-2 mr-[3rem]  text-balck rounded-full border-black">
          👍🏿 Like
        </button>

        <button className=" bg-gray-200  px-5 py-2 mr-[3rem] text-balck rounded-full  border-black text-bold">
          ◎ You
        </button>

        <button className=" bg-gray-200  px-5 py-2 mr-[3rem] text-balck rounded-full  border-black">
          ⌀ Explore
        </button>

        <button className=" bg-gray-200  px-5 py-2 mr-[3rem] text-balck rounded-full  border-black">
          ◇ Shorts
        </button>

        <button className=" bg-gray-200  px-5 py-2 mr-[3rem] text-balck rounded-full  border-black">
          👎🏿 Dislike
        </button>

        <button className=" bg-gray-200  px-5 py-2  text-balck rounded-full mr-[3rem]">
          ⌀ Share
        </button>

        <button className=" bg-gray-200  px-5 py-2   rounded-full mr-[3rem]">
          ⇓ Download
        </button>

        <button className=" bg-gray-200 p-3   rounded-[90%]">•••</button>
      </div>
      {/* </Link> */}
      <div className="p-5 text-xl  my-5">
        <p>
          Designed and developed a comprehensive YouTube clone using React,
          Redux, React Router, and custom CSS. The project showcases a
          commitment to crafting a user-friendly and visually engaging platform
          that emulates the core functionalities of the original YouTube. By
          leveraging a powerful combination of frontend technologies, the clone
          achieves a dynamic and responsive user interface, providing users with
          a seamless and immersive video-sharing experience. The project stands
          as a testament to the developer's adaptability and creativity in the
          rapidly evolving landscape of frontend development, contributing to
          innovative and future-ready solutions for a dynamic user base
        </p>

        <div className=" mt-3">
          The project incorporates state-of-the-art technologies, with React
          serving as the foundation for building modular components. Advanced
          state management is implemented through Redux, ensuring efficient data
          flow and enhancing the overall user experience. React Router
          facilitates smooth navigation, allowing users to seamlessly explore
          content. Tailwind CSS is skillfully utilized to add a polished and
          visually appealing design, emphasizing a modern and aesthetically
          pleasing user interface. The integration of these technologies
          demonstrates a proficiency in frontend development, highlighting the
          ability to seamlessly integrate features for an enhanced user
          experience
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
