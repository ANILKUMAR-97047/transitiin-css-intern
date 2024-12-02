import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sideBar/Sidebar";
import CustomerInfo from "./components/customerInfo/CustomerInfo";
import ChatFeed from "./components/chatFeed/ChatFeed";
import "./App.css";
import AskCature from "./components/askCature/AskCature";
import CaseFavorite from "./components/caseFavorite/CaseFavorite";
import ActionLauncher from "./components/actionLancher/ActionLauncher";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <div className="main-content">
          <CustomerInfo />
          <ChatFeed />
          <div className="right-container">
            <AskCature />
            <ActionLauncher/>
            <CaseFavorite />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default App;
