import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleChange(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  }

  const results = items.filter(item => item.category.includes(selectedCategory));
  console.log(results);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {results.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
