import SidebarMenu from "./SidebarMenu";
import { menus } from "../../data/SidebarData";
import { useState } from "react";
const Sidebar = ({ sidebarToggle }) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div
      className={`bg-red-950 w-64 p-4 fixed left-0 inset-y-0 m-2 border-2 rounded-lg ${
        sidebarToggle ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="">
        <h1 className="text-white text-center">Gestion Documental</h1>
      </div>

      <hr className="border-2 mx-2" />

      <ul className="mt-4 px-4 space-y-2">
        {menus.map((menu, index) => (
          <SidebarMenu
            key={index}
            title={menu.title}
            icon={menu.icon}
            items={menu.items}
            isOpen={openMenu === menu.title}
            subMenu={() =>
              setOpenMenu(openMenu === menu.title ? null : menu.title)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
