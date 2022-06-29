import * as React from "react";
import SidebarItem from "../SidebarItem";

const Sidebar = () => {
  return (
    <div>
      <SidebarItem
        link="/user/room-register"
        title="room-register"
      ></SidebarItem>
      <SidebarItem
        link="/user/room-registered"
        title="room-registered"
      ></SidebarItem>
    </div>
  );
};

export default Sidebar;
