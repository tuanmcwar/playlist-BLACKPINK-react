import React from "react";
import BP from "../../src/img/logoBP.png";

function Navbar() {
  return (
    <div className=" bg-black text-white text-center sm:h-[3rem] lg:h-[6rem] h-[3rem] text-3xl">
      <img
        className="Logo-img m-auto lg:w-56 sm:w-28 pt-0.5 w-28 "
        src={BP}
        alt="avatar"
      />
      {/* <i className="fa fa-spotify mr-5"></i> */}
    </div>
  );
}

export default Navbar;
