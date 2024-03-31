import { createBook, searchX } from "../assets";
function Modal({ setOpen }) {
  const handlerBook = () => {};
  return (
    <div className=" absolute top-0 left-0 z-50 bg-black/45  w-full h-screen flex items-center justify-center">
      <div className=" bg-white py-[24px] px-[28px] rounded-lg w-[400px]">
        <div className=" flex itms-center justify-between mb-[28px]">
          <h5 className=" font-medium text-[18px]">Create a book</h5>
          <img src={searchX} alt=" close" className=" cursor-pointer" onClick={() => setOpen(false)} />
        </div>
        <div className=" mb-4">
          <span className=" text-[14px]  font-medium">ISBN</span>
          <div className=" flex items-center gap-3 border border-inputBorder py-[12px] pl-4">
            <img src={createBook} alt="url" className=" cursor-pointer" />
            <input type="text" className=" bg-transparent  outline-none border-none " />
          </div>
        </div>
        <div className=" flex items-center justify-between  w-full">
          <button onClick={() => setOpen(false)} className=" w-[48%] bg-transparent text-countBook py-[10px] border  border-notFound px-10  text-center  text-[16px] font-medium  cursor-pointer rounded-md outline-none">
            Close
          </button>
          <button onClick={handlerBook} className=" w-[48%]  bg-btn-bg text-white border border-notFound  py-[10px] text-[16px] px-10 font-medium cursor-pointer rounded-md ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
