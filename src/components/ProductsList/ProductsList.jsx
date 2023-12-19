import "./index.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  { id: 1, title: "T-Shirt", price: "5000", description: "Color of blue" },
  { id: 2, title: "Short", price: "200", description: "Color of black" },
  { id: 3, title: "Umbrella", price: "400", description: "Color of red" },
  { id: 4, title: "Case", price: "50", description: "Color of orange" },
  { id: 5, title: "Glasses", price: "4000", description: "Color of black" },
];

const ProductsList = () => {
  const [addedItems, setAddedItems] = useState([]);

  const { tg } = useTelegram();

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
        text: `Buy ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => {
        <ProductItem product={item} onAdd={onAdd} className={"item"} />;
      })}
    </div>
  );
};

export default ProductsList;
