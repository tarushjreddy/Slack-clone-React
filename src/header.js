import logo from "./download.jpeg";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  return (
    <div className="Header_part">
      <div className="Header_left">
        <MenuIcon className="menue" />
      </div>
      <div className="Header_search">
        <SearchIcon className="menue" />
        <input placeholder="Enter the items" className="searcher" />
        {/* <img
          className="logo"
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"
        /> */}
      </div>
      <div className="Header_right">
        <div className="developer">A Project Developed by Tarush</div>
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
