import * as React from "react";
import SidebarItem from "../SidebarItem";

const Sidebar = () => {
  return (
    <div>
      <SidebarItem
        link="/user/room-registation"
        title="room-registation"
      ></SidebarItem>
      <SidebarItem
        link="/user/room-registered"
        title="room-registered"
      ></SidebarItem>
    </div>
  );
};

export default Sidebar;
