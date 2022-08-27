import BookmarkCard from "../components/BookmarkCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TravellerBar from "../components/TravellerBar";

// TODO Get Data From API Instead.
const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const ListingBooked = () => {
  return (
    <div>
      <Navbar />
      <TravellerBar />
      <div className="flex-wrap">
        {randomArray.map((data, index) => {
          return <BookmarkCard key={index} {...data} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ListingBooked;
