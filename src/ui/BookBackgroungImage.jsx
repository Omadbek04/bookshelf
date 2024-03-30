import { bookBg } from "../assets";
function BookBackgroungImage({ children }) {
  return (
    <div className="bg-no-repeat w-full h-screen relative " style={{ backgroundImage: `url(${bookBg})` }}>
      {children}
    </div>
  );
}

export default BookBackgroungImage;
