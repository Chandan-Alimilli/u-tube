// import { Link } from "react-router-dom";

// function Logo() {
//   return (
//     <div>
//       <img
//         alt="logo"
//         className=" h-6  mt-2 "
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/YouTube_logo_%282017%29.png/640px-YouTube_logo_%282017%29.png"
//       />
//     </div>
//   );
// }

// export default Logo;

import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img
          alt="logo"
          class="h-6 mt-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/YouTube_logo_%282017%29.png/640px-YouTube_logo_%282017%29.png"
        />
      </a>
    </div>
  );
}

export default Logo;
