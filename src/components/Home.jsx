import BookBackgroungImage from "../ui/BookBackgroungImage";
import CardList from "./CardList";
import CreateBooks from "./CreateBooks";
import Navbar from "./Navbar";
function Home() {
  return (
    <BookBackgroungImage>
      <div className=" container mx-auto pt-5  ">
        <Navbar />
        <CreateBooks />
        <CardList />
      </div>
    </BookBackgroungImage>
  );
}

export default Home;
