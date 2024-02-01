import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartProvider, ShoppingCartContext } from "../../Context";
import { initialLocalStorage } from "../../Utils/initialLocalStorage";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import NavBar from "../../Components/NavBar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu";
import "./App.css";

const AppRouter = () => {
  const context = useContext(ShoppingCartContext);

  //get Account of localstorage
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  //Sign Out
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);

  //Has an account
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signOut || parsedSignOut;

  let routes = useRoutes([
    {
      path: "/E-comerce-react/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/E-comerce-react/sign-in"} />
        ),
    },
    {
      path: "/E-comerce-react/All",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/E-comerce-react/sign-in"} />
        ),
    },
    {
      path: "/E-comerce-react/clothes",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/E-comerce-react/sign-in"} />
        ),
    },
    {
      path: "/E-comerce-react/electronics",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/E-comerce-react/sign-in"} />
        ),
    },
    {
      path: "/E-comerce-react/jewelery",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/E-comerce-react/sign-in"} />
        ),
    },
    { path: "E-comerce-react/my-account", element: <MyAccount /> },
    { path: "E-comerce-react/my-order", element: <MyOrder /> },
    { path: "E-comerce-react/my-orders", element: <MyOrders /> },
    { path: "E-comerce-react/my-orders/last", element: <MyOrder /> },
    { path: "E-comerce-react/my-orders/:id", element: <MyOrder /> },
    { path: "E-comerce-react/*", element: <NotFound /> },
    { path: "E-comerce-react/sign-in", element: <SingIn /> },
  ]);

  return routes;
};

function App() {
  initialLocalStorage();
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRouter />
          <NavBar />
          <CheckOutSideMenu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
