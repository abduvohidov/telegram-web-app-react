import "./index.css";
import Button from "../Button/Button";

const ProductItem = ({ product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };
  return (
    <div className="product">
      <div className="img">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstyleshoots.com%2Fproduct-photography-tutorial%2F2016%2F8%2F5-all-purpose-styling-tips-every-fashion-product-stylist-needs-to-know&psig=AOvVaw30QbE_VRhOc4243OKh8Bpt&ust=1703047528287000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKi53c_YmoMDFQAAAAAdAAAAABAD"
          alt="png"
        />
      </div>
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        <span>
          Price: <b>{product.price}</b>
        </span>
      </div>
      <Button className="add-btn" onClick={onAddHandler}>
        Add in cart
      </Button>
    </div>
  );
};

export default ProductItem;
