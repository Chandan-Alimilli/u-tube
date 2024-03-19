import { Link } from "react-router-dom";
import Icons from "./Icons";

function Maintenance() {
  return (
    <div className="ml-[15rem] mt-16 text-xl font-semibold pl-14  bg-[#2a3d3a]">
      {/* </Link> */}
      <div className="p-5  text my-5">
        <p className="text-4xl text-[#52a447] mx-4 mb-4">About App</p>
        <p className="mx-4 mb-4">
          Designed and developed a comprehensive Web App using React, Redux,
          React Router, and custom CSS. The project showcases a commitment to
          crafting a user-friendly and visually engaging platform that emulates
          the core functionalities . By leveraging a powerful combination of
          frontend technologies, the dynamic and responsive user interface,
          providing users with a seamless and immersive video-sharing
          experience. The project stands as a testament to the developer's
          adaptability and creativity in the rapidly evolving landscape of
          frontend development, contributing to innovative and future-ready
          solutions for a dynamic user base
        </p>

        <div className=" mt-3 m-4 bg-[#2a3d3a]">
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

        <p className="text-4xl text-[#52a447] m-4 ">About Me</p>

        <p className="m-4 bg-[#2a3d3a]">
          Hello! I'm Chandan, a motivated MERN Stack Developer with a passion
          for web development. Through self-directed learning and hands-on
          projects, I've gained expertise in MongoDB, Express.js, React.js, and
          Node.js. My focus on building responsive interfaces and dynamic
          applications, coupled with a commitment to continuous learning,
          reflects my eagerness to contribute innovative solutions to real-world
          challenges.
        </p>
        <div className="flex justify-evenly bg-[#2a3d3a]">
          <a href="https://chandan08.netlify.app/">
            <button className="mb-[14px] ml-4  bg-[#52a447] rounded-lg  px-3  p-1 font-semibold">
              Portfolio
            </button>
          </a>
          <a href="https://www.linkedin.cohttps://www.linkedin.com/in/chandan-allimilli/">
            <button className="mb-[14px] ml-4 bg-[#52a447] rounded-lg  px-3  p-1 font-semibold">
              Linkden
            </button>
          </a>

          <a href="https://github.com/Chandan-Alimilli">
            <button className="mb-[14px] ml-4  bg-[#52a447] rounded-lg  px-3  p-1 font-semibold">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
