export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => (sum += obj.price * obj.count), 0);
};
