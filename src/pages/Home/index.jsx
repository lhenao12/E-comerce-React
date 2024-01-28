import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProDetail from "../../Components/CheckOutSideMenu";
import Modal from "../../Components/Modal";
import ProdDetMod from "../../Components/ProdDetMod";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchBy?.length > 0) {
      if (context.filteredItem?.length > 0) {
        return context.filteredItem
          ? context.filteredItem.map((item) => {
              return <Card key={item.id} data={item} />;
            })
          : console.log("Error al cargar API filtrada...");
      } else {
        return <div>Anything to show :( </div>;
      }
    } else {
      return context.item
        ? context.item.map((item) => {
            return <Card key={item.id} data={item} />;
          })
        : console.log("Error al cargar All API.....");
    }
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">
            Items To Buy Exclusive Products
          </h1>
        </div>
        <input
          type="text"
          placeholder="Find Product"
          className="rounded-lg border border-black w-60 p-2 mb-4 focus:outline-none"
          onChange={(event) => context.setSearchBy(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProDetail />
        {context.openModal && (
          <Modal setOpenModal={context.setOpenModal}>
            <ProdDetMod />
          </Modal>
        )}
      </Layout>
    </>
  );
}

export default Home;
