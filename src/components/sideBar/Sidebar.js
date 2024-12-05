import React from "react";
import "./Sidebar.css";
import { PiNoteDuotone } from "react-icons/pi";
import { FaLink } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TbCube } from "react-icons/tb";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { LuWrench } from "react-icons/lu";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { FiGift } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h1 className="heading">Risk Hawk</h1>
      <ul className="list-items">
        <li ><AiOutlineFileSearch className="list-logo"/>Internal Audit</li>
        <li><PiNoteDuotone className="list-logo"/>UAT Testing</li>
        <li><FaLink className="list-logo"/>Intract</li>
        <li><IoPeopleOutline className="list-logo"/>Queue</li>
        <li><FaNetworkWired className="list-logo"/>Workflow</li>
        <li><IoPersonOutline className="list-logo"/>Admin</li>
        <li><TbCube className="list-logo"/>Asset</li>
        <li><IoPeopleOutline className="list-logo"/>Parent</li>
        <li><TbCircleNumber1 className="list-logo"/>Option One</li>
        <li><TbCircleNumber2 className="list-logo"/>Option Two</li>
        <li><LuWrench className="list-logo"/>All Accessories</li>
        <li><BsStars className="list-logo"/>Decorating</li>
        <li><FiGift className="list-logo"/>Presenting</li>
      </ul>
    </aside>  
  );
};

export default Sidebar;
