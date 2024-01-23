import Icons from "./Icons";

function Maintenance() {
  return (
    <div className="">
      <img
        src="https://img.freepik.com/free-vector/coming-soon-paint-brush-stroke_78370-1125.jpg"
        alt="coming soon "
        className=" w-[40%] ml-[28rem]    "
      />
      <div className=" font-bold ml-[29rem] text-lg">
        <div className=" mb-4 flex">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"
            alt="icon"
            className=" mr-[16px] h-[30px]"
          />

          <p>we are working on this icons functionality</p>
        </div>

        <Icons />
      </div>
    </div>
  );
}

export default Maintenance;
