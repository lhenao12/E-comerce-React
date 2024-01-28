import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalproducts, index } = props;
  let fechaCompra = new Date();
  let fechaCompra2 = fechaCompra.toLocaleDateString();

  return (
    <main className="p-5 border">
      <div className="border-zinc-600 rounded-l-lg rounded-r-lg rounded-tl-lg rounded-tr-lg  bg-cyan-100 p-3">
        <div className="flex justify-between space-x-24 items-center border-b-2 border-y-cyan-950">
          <span>Order N°{index + 1} </span>
          <svg className="w-5 h-5">
            <ChevronDoubleRightIcon />
          </svg>
        </div>
        <div>
          <p className="flex justify-between space-x-24 items-center">
            <svg className="w-5 h-5 ">
              <CalendarDaysIcon />
            </svg>
            <div>{fechaCompra2}</div>
          </p>
        </div>
        <div>
          <p className="flex justify-between space-x-10 items-center">
            <svg className="w-5 h-5">
              <ClipboardDocumentCheckIcon />
            </svg>
            <div>{totalproducts}</div>
          </p>
        </div>
        <div>
          <p className="flex justify-between space-x-10 items-center bg-amber-200 text-cyan-800">
            <svg className="w-5 h-5">
              <CurrencyDollarIcon />
            </svg>
            <div>{totalPrice}</div>
          </p>
        </div>
      </div>
    </main>
  );
};

export default OrdersCard;
