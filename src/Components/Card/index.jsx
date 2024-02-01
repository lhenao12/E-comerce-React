import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Card = (items) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = (productShow) => {
    //context.openProDet();
    context.openProdMod();
    //context.setDetProShow(productShow);
    context.setDetProShowMod(productShow);
  };

  const addProdToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProds([...context.cartProds, productData]);
    context.openCheckOutSideMenu();
  };

  const renderIcon = (item) => {
    const isInCart =
      context.cartProds.filter((pro) => pro.id == item.id).length > 0;

    //console.log("este producto si esta: " + isInCart);
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-1">
          <CheckBadgeIcon className="w-5 h-5" />
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <PlusIcon
            onClick={(event) => addProdToCart(event, items.data)}
            className="w-5 h-5"
          />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail(items.data)}
    >
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {items.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={items.data.image}
          alt={items.data.description}
        />
        {renderIcon(items.data)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{items.data.title}</span>
        <span className="text-lg font-medium ">${items.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
