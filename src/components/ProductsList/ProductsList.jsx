import "./index.css";

import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = () => {
  const products = [
    { id: 1, title: "T-Shirt", price: 5000, description: "Color of blue" },
    { id: 2, title: "Short", price: 200, description: "Color of black" },
    { id: 3, title: "Umbrella", price: 400, description: "Color of red" },
    { id: 4, title: "Case", price: 50, description: "Color of orange" },
    { id: 5, title: "Glasses", price: 4000, description: "Color of black" },
    { id: 6, title: "Glasses", price: 4000, description: "Color of black" },
  ];
  
  const { tg, queryId } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };
    fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, []);

  const [addedItems, setAddedItems] = useState([]);


  const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  };

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${"$" + getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => {
        return <ProductItem product={item} onAdd={onAdd} className="item" />;
      })}
    </div>
  );
};

export default ProductsList;
