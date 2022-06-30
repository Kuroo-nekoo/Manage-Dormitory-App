import * as React from "react";
import SidebarItem from "../SidebarItem";
import SidebarItemGroup from "../SidebarItemGroup";

const Sidebar = () => {
  return (
    <div>
      <SidebarItemGroup title="hợp đồng">
        <SidebarItem
          link="/user/room-registation"
          title="room-registation"
        ></SidebarItem>
      </SidebarItemGroup>
    </div>
  );
};

export default Sidebar;
