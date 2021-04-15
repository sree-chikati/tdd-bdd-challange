const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================


// it("should return the area of a rectangle given the width and height")
it("should return the area of a rectangle", function() {
  const rect_area = utils.area(10, 5)
  expect(rect_area).to.be.a("number")
  expect(rect_area).to.be.at.least(0)
  expect(rect_area).to.equal(50)
})

// it("return the perimeter of a rectangle given the values")
it("return the perimeter of a rectangle", function() {
  const rect_perimeter = utils.perimeter(10, 5)
  expect(rect_perimeter).to.be.a("number")
  expect(rect_perimeter).to.be.at.least(0)
  expect(rect_perimeter).to.equal(30)
})

// it("return the area of a circle with radius given the radius")
it("return the area of a circle with radius", function() {
  const circ_area = utils.circleArea(10)
  expect(circ_area).to.be.a("number")
  expect(circ_area).to.be.at.least(0)
  expect(circ_area).to.equal(314)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart.length).to.be.equal(0)
})

it("Should add a new item to the shopping cart", function() {
  const apple = utils.createItem("apple", 0.99)
  utils.addItemToCart(apple)
  const cart = utils.getShoppingCart()
  expect(cart).to.be.a("array")
  expect(cart.length).to.be.equal(1)
})

it("Should return the number of items in the cart", function() {
  const num_items = utils.getNumItemsInCart()
  expect(num_items).to.be.a("number")
  expect(num_items).to.be.at.least(0)
})

it("Should remove items from cart", function() {
  const num_items = utils.getNumItemsInCart()
  const apple = utils.createItem("apple", 0.99)
  utils.addItemToCart(apple)
  utils.removeItemFromCart(apple)
  expect(num_items).to.be.equal(0)
  expect(utils.removeItemFromCart(apple)).to.be.equal("No item located")
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
