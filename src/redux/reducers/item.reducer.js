import { combineReducers } from "redux";
/*
state={
    items:[{},{}]
    selectedItem:{}
}
*/
const items = [
  {
    title: "Dress",
    description: "pink",
  },
  {
    title: "Phone",
    description: "doesn't stop ringing",
  },
  {
    title: "TV",
    description: "big and clear",
  },
];

const itemsReducer = (oldItems = items, action) => {
  return oldItems;
};

const selectItem = (item = null, action) => {
  if (action.type === "SELECTED_ITEM") {
    return action.payload;
  }
  return item;
};

const reducers = combineReducers({
  selectItem: selectItem,
  items: itemsReducer,
});
export default reducers;
