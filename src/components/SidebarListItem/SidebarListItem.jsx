import * as React from "react";
import { Link } from "react-router-dom";

const SidebarListItem = ({ title, Icon, link }) => {
  return (
    <div>
      <Link to={link}>{title}</Link>
      {/* <Icon></Icon> */}
    </div>
  );
};

export default SidebarListItem;
