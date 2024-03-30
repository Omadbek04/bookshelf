function CreateBooks() {
  return (
    <div className=" flex items-center mb-3 justify-between">
      <h3 className=" text-[30px] font-bold text-white">
        You’ve got <span className="  text-countBook">7 book</span>
      </h3>
      <div className=" flex items-center gap-2 bg-btn-bg text-white text-[16px] font-medium py-[10px] px-6 rounded-md hover:opacity-90">
        <span>+</span> <span>Create a book</span>
      </div>
    </div>
  );
}

export default CreateBooks;
