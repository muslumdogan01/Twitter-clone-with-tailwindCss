import React, { useState, useEffect } from "react";
import twitterLogo from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/icon";
import SideLink from "../Components/SideLink";
import UserBox from "../Components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2 ">
      <div>
        <div className="mt-1 mb-4 flex justify-center rounded-full items-center w-12 h-12 hover:bg-gray-100">
          <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ icon, name }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="text-white bg-blue-600 shadow-lg hover:bg-blue-700 rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <div>
        <UserBox />
      </div>
    </div>
  );
};

export default Sidebar;
