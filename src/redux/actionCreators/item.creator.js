export const selectedItem = (item = null) => {
  return {
    type: "SELECTED_ITEM",
    payload: item,
  };
};
