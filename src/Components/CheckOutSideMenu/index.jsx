import { useContext } from "react";
import { Link } from "react-router-dom";
import "../CheckOutSideMenu/style.css";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../Utils";

const CheckOutSideMenu = () => {
  //let itemsPrice = new Array();
  //var sumTotal = 0;
  const context = useContext(ShoppingCartContext);
  //console.log("PRODUCT SHOW: ", context.detProShow);

  const handleDelete = (id) => {
    const filteredProd = context.cartProds.filter((pro) => pro.id != id);
    context.setCartProds(filteredProd);
  };

  //Aqui hacemos el checkOut
  const handleCheckOut = () => {
    const orderToAdd = {
      date: "01-02-2023",
      products: context.cartProds,
      totalProducts: context.cartProds.length,
      totalPrice: totalPrice(context.cartProds),
    };
    //seteamos la orden
    context.setOrder([...context.order, orderToAdd]);
    //blanqueamos la orden despues del checkout
    context.setCartProds([]);
    context.setSearchBy(null);
  };

  return (
    <aside
      className={`${context.isCheckOutSideMenuOpen ? "flex" : "hidden"}
      checkout-side-menu overflow-auto  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className=" flex justify-between items-center p-6 cursor-pointer ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          onClick={() => {
            context.closeCheckOutSideMenu();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProds.map((products) => {
          //itemsPrice.push(products.price);
          //sumTotal = totalPrice(itemsPrice);
          return (
            <OrderCard
              key={products.id}
              id={products.id}
              title={products.title}
              imgUrl={products.image}
              price={products.price}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
      <div className="px-6 cursor-pointer font-medium text-xl mb-6">
        <p
          className="flex justify-between items-center mb-2
        "
        >
          <span>Precio Total:</span>
          <span>${totalPrice(context.cartProds)}</span>
        </p>
        <Link to="/E-comerce-react/my-orders/last">
          <button
            className="bg-black py-3 text-white  w-full rounded-lg "
            onClick={() => handleCheckOut()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
