import { NavLink } from "react-router-dom";

const NavItem = ({
  to,
  children,
  className,
}: {
  to: string;
  children: JSX.Element | string;
  className?: string;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `${
        isActive
          ? "bg-green-700 text-white"
          : "hover:bg-green-700 hover:bg-opacity-90 hover:text-white"
      }
      ${className ? className : "rounded-md px-3 py-2"}`
    }
  >
    {children}
  </NavLink>
);

export default NavItem;
