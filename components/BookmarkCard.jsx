import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { VscBookmark } from "react-icons/vsc";
import { FcBookmark } from "react-icons/fc";

function BookmarkCard(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="bookmark-card col">
      <div className="row bkm-top between">
        <div className="row gap">
          <div className="avatar"></div>
          <div className="col">
            <h4>Sonya Clarke</h4>
            <span>March 24, 2020</span>
          </div>
        </div>
        <div className="tiny-btn">
          <BsPersonFill />
          5.0
        </div>
      </div>
      <div className="image">
        <button>Male</button>
      </div>
      <div className="bkm-bottom col">
        <div className="row between">
          <button>4 Jun - 6 Jun</button>
          <div className="circle" onClick={() => setClicked(!clicked)}>
            {!clicked ? (
              <VscBookmark className="bookmark-icon" />
            ) : (
              <FcBookmark className="bookmark-icon" />
            )}
          </div>
        </div>
        <h2>Vagabond Cabin</h2>
        <h4 style={{ marginTop: "1rem" }}>
          $100 / <span> Day</span>
        </h4>
      </div>
    </div>
  );
}

export default BookmarkCard;
