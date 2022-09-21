import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  function handleCart() {
    setInCart(inCart => !inCart);
    console.log(inCart);
  }

  const liAppClass = !inCart ? "" : "in-cart";

  return (
    <li className={liAppClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
