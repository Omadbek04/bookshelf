import { useState } from "react";
import { homeLogo, qongiroq, searchL, searchLwhite, searchX } from "../assets";

function Navbar() {
  const [search, setSearch] = useState("");
  return (
    <div className=" flex items-center justify-between mb-[36px]">
      <div className=" flex items-center gap-[24px]">
        <img className=" w-[150px] h-[36px] cursor-pointer" src={homeLogo} alt="logo" />
        <div className={` flex items-center rounded-md gap-2 px-[26px] py-[10px] ${search && " bg-white gap-3"}`}>
          {!search ? <img src={searchLwhite} alt="search lupa white" className=" cursor-pointer" /> : <img src={searchL} alt="search lupa" className=" cursor-pointer" />}
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className={` placeholder:text-[16px]  bg-transparent outline-none focus:outline`} placeholder="Search for any training you want " />

          {search && <img src={searchX} alt=" search delete" className=" cursor-pointer" />}
        </div>
      </div>
      <div className="  flex items-center gap-6">
        <div>
          <img src={qongiroq} alt="qongiroq" className="  cursor-pointer" />
        </div>
        <div className=" h-[40px] w-[40px] flex items-center cursor-pointer justify-center border-[4px] border-rose-400 rounded-full">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
