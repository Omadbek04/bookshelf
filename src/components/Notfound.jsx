import React from "react";
import { notFound } from "../assets";
import BookBackgroungImage from "../ui/BookBackgroungImage";
import { Link } from "react-router-dom";
function refreshPage() {
  window.location.reload();
}
function Notfound() {
  return (
    <BookBackgroungImage>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={notFound} alt="not found" className=" mb-9" />
        <div className=" flex items-center justify-center gap-3">
          <Link className=" text-white  text-[16px] font-medium py-3 px-8 hover:placeholder-opacity-90 bg-btn-bg rounded-md">Go Home Page</Link>
          <button onClick={refreshPage} className=" text-countBook  text-[16px] border-[1px] border-notFound bg-transparent font-medium py-3 px-8   rounded-md">
            Reload Page
          </button>
        </div>
      </div>
    </BookBackgroungImage>
  );
}

export default Notfound;
