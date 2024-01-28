import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className=" flex flex-col w-80">
        {/**
        ?-> preguntamos si tiene una orden 
        .slice(-1)--> que nos muestre un elemento, el ultimo del array
        [0]--> en la posicion cero
        */}

        {context.order?.[index]?.products.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imgUrl={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default MyOrder;
