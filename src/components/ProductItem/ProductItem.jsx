import "./index.css";
import Button from "../Button/Button";

const ProductItem = ({ product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };
  return (
    <div className="product">
      <div className="img">
        <img src="https://images.squarespace-cdn.com/content/v1/528f8b33e4b01f2a315145b2/1473165174041-ELTK3U8JIOQRWBV330P7/static1.squarespace-13.jpg" alt="" />
      </div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        <span>
          Price: <b>{product.price}</b>
        </span>
      </div>
      <Button className="add-btn" onClick={onAddHandler}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductItem;
