import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import { selectedItem } from "../../redux/actionCreators/item.creator";

function ShoppingList({ items, selectItem }) {
  return (
    <div>
      <h1>My Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <ShoppingItem title={item.title} description={item.description} />
            <Button onClickF={() => selectItem(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return { items: state.items, selectItem: state.selectItem };
};

export default connect(mapStateToProps, { selectItem: selectedItem })(
  ShoppingList
); // connect()()
