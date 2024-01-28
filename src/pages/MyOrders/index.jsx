import { useContext } from "react";
import { Link } from "react-router-dom";
//import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1>MyOrders</h1>
      </div>
      {context.order.map((order, index) => ( 
       
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalproducts={order.totalProducts}
            index={index}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
