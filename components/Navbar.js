import { BiTargetLock, BiWalletAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { MdNotifications, MdDateRange, MdPerson } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="row nav-row-1">
        <h2 className="logo">Totel</h2>
        <div className="location">
          <h4>
            <BiTargetLock />
            Miami, Florida
            {/* <BsChevronDown /> */}
          </h4>
        </div>
      </div>

      <div className="row nav-row-2">
        <button>
          <MdDateRange />
          Dates
        </button>
        <button>
          <MdPerson />
          Rating 4.0+
        </button>
        <button>
          <RiBuilding2Line />
          Booking Status
        </button>
        <button>
          <BiWalletAlt />
          Budget
        </button>
      </div>

      <div className="row">
        <button style={{ background: "#657ADC", color: "#fff" }}>
          <FiPlusCircle /> Post
        </button>
        <FaRegComment />
        <MdNotifications className="big"/>
        <div className="avatar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
