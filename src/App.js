import logo from "./logo.svg";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Item from "./components/ShoppingItem/ShoppingItem";
import "./App.css";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import { connect } from "react-redux";

function App({ selectedItem }) {
  return (
    <>
      <div>
        <h2>Selected Item</h2>
        {selectedItem ? (
          <Item
            title={selectedItem.title}
            description={selectedItem.description}
          />
        ) : (
          <span>no item selected</span>
        )}
      </div>
      <div className="App">
        hello react
        <ShoppingList />
        <ShoppingItem />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { selectedItem: state.selectItem };
};
export default connect(mapStateToProps)(App);
//connect(mapping object and function)(component)
