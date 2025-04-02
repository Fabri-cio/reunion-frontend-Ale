import ActionButton from "../shared/ActionButton";
import { NavLink } from "react-router-dom";

const getNavLinkEstado = (isActive) =>
  `block px-4 py-2 rounded-lg transition-all duration-200 hover:text-white hover:bg-green-800 bg-white text-red-950 font-semibold ${
    isActive ? "bg-gray-700 text-white" : "text-gray-700 hover:bg-gray-700"
  }`;

const SidebarMenu = ({ title, icon: Icon, items, isOpen, subMenu }) => {
  return (
    <li>
      <ActionButton
        label={title}
        icon={Icon}
        onClick={subMenu}
        styles={`flex items-center w-full px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 hover:text-white text-red-950 bg-white hover:bg-green-800 
                    ${
                      isOpen
                        ? " text-sky-950"
                        : "hover:bg-green-500 text-black-300"
                    }`}
        styleIcon="w-5 h-5"
      />

      {/* Submenú desplegable */}
      {isOpen && (
        <ul className="mt-2 pl-6 space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => getNavLinkEstado(isActive)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenu;
