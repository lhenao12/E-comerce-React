import { useContext } from "react";
import "../ProdDetMod/style.css";
import { ShoppingCartContext } from "../../Context";

const ProdDetMod = () => {
  const context = useContext(ShoppingCartContext);

  //console.log("PRODUCT SHOW: ", context.detProShow);

  return (
    <div className="prodDetailModal border border-black rounded-lg bg-white">
      <div className=" flex justify-between items-center p-6 cursor-pointer">
        <h2 className="font-medium text-xl">Detalle</h2>
        <div
          onClick={() => {
            context.closeProdMod();
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

      <figure className="px-6">
        <img
          className="w-100 h-100 rounded-lg"
          src={context.detProShowMod.image}
          alt={context.detProShowMod.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          {context.detProShowMod.price}
        </span>
        <span className="font-medium text-md">
          {context.detProShowMod.title}
        </span>
        <span className="font-light text-sm">
          {context.detProShowMod.description}
        </span>
      </p>
    </div>
  );
};

export default ProdDetMod;
