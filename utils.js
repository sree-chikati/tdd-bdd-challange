// ========================================================
// Level 1 Challenges
// ========================================================

const { interfaces } = require("mocha")

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return Number(w*h)
}

const perimeter = (w, h) => {
  // should return the perimeter
  return Number((h + w) * 2)
}

const circleArea = r => {
  // should return the area of the circle
  return Number(Math.pow(r, 2) * 3.14)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  return shoppingCart.length
}

const removeItemFromCart = (item) => {
  if (shoppingCart.length === 0 || !shoppingCart.includes(item)) {
    return "No item located"
  }
  else {
    shoppingCart.splice(item, 1)
  }
}

const isCartEmpty = () => {
  return getNumItemsInCart() === 0 && shoppingCart.length === 0
}

const itemTotal = () => {
  let cost = 0
  if (shoppingCart.length > 0) {
      shoppingCart.forEach((item) => {
          cost += item.quantity * item.price
      })
  }
  return Number(cost.toFixed(2))
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, isCartEmpty, itemTotal
}
