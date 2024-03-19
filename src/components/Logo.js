import logoimg from "../components/assets/chandan.png";

import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img alt="logo" class="h-16 mt-2" src={logoimg} />
      </a>
    </div>
  );
}

export default Logo;
