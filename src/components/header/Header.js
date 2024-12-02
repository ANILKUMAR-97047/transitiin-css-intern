import "./Header.css";
import { TiHomeOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header">
      <p className="logo">Chat / Feed Chat</p>

      <div className="header-actions">
        <TiHomeOutline className="icon" />
        <button className="process-button">Process Owner HOD</button>
        <button className="admin-button">Admin</button>
        <div className="profile">
          <p className="name">Palak Bansal</p>
          <img
            className="image"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="Profile"
          />
          <IoSettingsOutline className="icon" />
          <FiLogOut className="log-icon" />
          <p className="log-out">Log Out</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
