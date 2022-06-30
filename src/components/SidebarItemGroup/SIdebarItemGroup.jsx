import * as React from "react";

const SidebarItemGroup = ({ children, title }) => {
  const [dropdownShow, setDropdownShow] = React.useState(false);

  return (
    <div>
      <div onClick={() => setDropdownShow(!dropdownShow)}>{title}</div>
      <div className={`${dropdownShow ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
};

export default SidebarItemGroup;
