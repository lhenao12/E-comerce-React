import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import ShoppingCart from "../ShoppingCart";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";
  const contador = useContext(ShoppingCartContext);

  const singOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(singOut);
  const isUserSignOut = contador.singOut || parsedSignOut;

  //get Account of localstorage
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = contador.account
    ? Object.keys(contador.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignOut = () => {
    const stringifiedSignOit = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOit);
    contador.setSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-black/60">{parsedAccount?.email}</li>
          <li>
            <NavLink
              to="/E-comerce-react/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/E-comerce-react/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My-Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/E-comerce-react/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/E-comerce-react/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign in
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-slate-500 text-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to={`${
              isUserSignOut ? "/E-comerce-react/sign-in/" : "/E-comerce-react/"
            }`}
            onClick={() => contador.setSearchBy(0)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/All"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => contador.setSearchBy(0)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/clothes"
            onClick={() => contador.setSearchBy("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => contador.setSearchBy("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => contador.setSearchBy("jewelery")}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/E-comerce-react/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      {/**Menu Derecho */}
      <ul className="flex items-center gap-3">
        {renderView()}
        <li className="text-white-500 flex items-center">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
