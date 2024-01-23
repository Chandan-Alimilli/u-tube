// import React from "react";

// const Shimmer = () => {
//   return (
//     <div className="ml-5 w-80 h-80 shadow-md p-5 ">
//       <div className="h-[65%] bg-gray-300 px-2"></div>
//       <div className=" w-5 bg-gray-300 px-2"></div>
//     </div>
//   );
// };

// const ShimmerCont = () => {};
// export default Shimmer;

import React from "react";

const ShimmerCard = () => {
  return (
    <div className="ml-5 w-80 h-80 shadow-md p-3 ">
      <div className="h-[65%] bg-gray-300 px-2"></div>
      <div className="w-5 bg-gray-300 px-2"></div>
    </div>
  );
};

const ShimmerCont = () => {
  const shimmerCards = Array.from({ length: 12 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return <div className=" flex flex-wrap">{shimmerCards}</div>;
};

export default ShimmerCont;
