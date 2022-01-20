//get no of items in the cart
export const cartCount = (items = []) => {
  return items?.reduce((qty, item) => Number(item.qty) + qty, 0)
}
