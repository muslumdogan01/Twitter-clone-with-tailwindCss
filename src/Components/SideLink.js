import React from "react";

function SideLink({ name, Icon, active, onMenuItemClick }) {
  const isActive = active === name;

  return (
    <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
      <a
        href={name.toLowerCase()}
        className="block text-xl mb-2 pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`
          flex items-center group-hover:bg-blue-50 group-hover:text-blue-500 rounded-full py-3 pl-3 pr-8
          ${isActive ? "bg-blue-500" : ""}
          `}
          >
            <Icon />
            <span className="ml-4 font-bold"> {name} </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default SideLink;
