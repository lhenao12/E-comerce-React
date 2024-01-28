import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //estado para enviar sumatoria de productos
  const [count, setCount] = useState(0);

  //Modal para abrir y cerrar detalle del producto
  const [openModal, setOpenModal] = useState(false);
  const [detProShowMod, setDetProShowMod] = useState({});
  const openProdMod = () => setOpenModal(true);
  const closeProdMod = () => setOpenModal(false);

  //estado de CheckOut Side Menu para abrir y cerrar aside
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

  //estado para mostrar producto y detalle al aside
  const [detProShow, setDetProShow] = useState({});

  //estado para cargar los productos al carrito de compras
  const [cartProds, setCartProds] = useState([]);

  // Estado  de carrito de compra para chekout
  const [order, setOrder] = useState([]);

  //Estado de para la API y traer los item
  const [item, setItems] = useState("");

  //Estado de para traer los items filtrados
  const [filteredItem, setFilteredItems] = useState("");

  //Estado para la busqueda de item
  const [searchBy, setSearchBy] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchBy) {
      setFilteredItems(filteredItemsShop(item, searchBy));
    } else {
      setFilteredItems(item);
    }
  }, [searchBy, item]);

  const filteredItemsShop = (item, searchBy) => {
    return item?.filter((item) => 
      item.title.toLowerCase().includes(searchBy.toLowerCase()) ||
        item.category.toLowerCase().includes(searchBy.toLowerCase())
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,

        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        isCheckOutSideMenuOpen,

        detProShow,
        setDetProShow,

        cartProds,
        setCartProds,

        openProdMod,
        closeProdMod,
        openModal,
        setOpenModal,
        detProShowMod,
        setDetProShowMod,

        order,
        setOrder,

        item,
        setItems,

        filteredItem,
        setFilteredItems,

        searchBy,
        setSearchBy,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
