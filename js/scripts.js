//Mock Database for pizza parts with prices
const pizzaData = {
  "cheese": {"Normal": 1, "Diary-free": 1.5, "None": 0},
  "sauce": {"Normal": 1, "Marinara": 1, "BBQ": 1.5, "Alfredo": 1.5, "None": 0},
  "crust": {"Normal": 1, "Thin": 0.5, "Deep Dish": 1.5, "Stuffed": 2},
  "size": {"Small": 1, "Medium": 2, "Large": 3},
  "toppings": {
    "Pepperoni": 1,
    "Ham": 1,
    "Beef": 1.5,
    "Salami": 1.5,
    "Chicken": 1,
    "Sausage": 2,
    "Pineapple": 1.5,
    "Bell Peppers": 2,
    "Olives": 1,
    "Mushrooms": 1,
    "None": 0
  }
};

function Order(cheese, sauce, crust, toppings, size) {
  this.cheese = cheese;
  this.sauce = sauce;
  this.crust = crust;
  this.toppings = toppings;
  this.size = size;
}

Order.prototype.calcPrice = function() {
  let price = 0
  price += calcPartPrice(this.cheese, "cheese");
  price += calcPartPrice(this.sauce, "sauce");
  price += pizzaData.size[this.size];
  price += pizzaData.crust[this.crust];
  this.toppings.forEach(function(topping) {
    price += calcPartPrice(topping, "toppings");
  });

  return price;
}

function calcPartPrice(part, partName) {
  let modifier = 0;
  switch (part.amount) {
    case ("light"): modifier = 0.5; break;
    case ("normal"): modifier = 1; break;
    case ("extra"): modifier = 2; break;
    deafult: break;
  }

  return pizzaData[partName][part.kind] * modifier;
}

function populateDropdowns() {
  $("#cheese").html(populateDropdown(pizzaData.cheese));
  $("#sauce").html(populateDropdown(pizzaData.sauce));
  $("#crust").html(populateDropdown(pizzaData.crust));
  $("#topping-1").html(populateDropdown(pizzaData.toppings));
  $("#topping-2").html(populateDropdown(pizzaData.toppings));
  $("#topping-3").html(populateDropdown(pizzaData.toppings));
  $("#size").html(populateDropdown(pizzaData.size));
}

function populateDropdown(pizzaDataObject) {
  let html = "";
  Object.keys(pizzaDataObject).forEach(function(key) {
    html +=  "<option>" + key + "</option>"
  });

  return html;
}

function createOrderHTML(order) {
  let orderHTML = "<div>";
  orderHTML += "<p><b>Cheese</b>: " + order.cheese.kind + " amount: " + order.cheese.amount + "</p>";
  orderHTML += "<p><b>Sauce</b>: " + order.sauce.kind + " amount: " + order.sauce.amount + "</p>";
  orderHTML += "<p><b>Crust</b>: " + order.crust + "</p>";

  let toppings = "<p><b>Toppings</b>: ";
  order.toppings.forEach(function(topping) {
    toppings += topping.kind + " amount: " + topping.amount + " | ";
  });
  orderHTML += toppings.slice(0, toppings.length - 2) + "</p>";

  orderHTML += "<p><b>Size</b>: " + order.size + "</p>";
  orderHTML += "<p><b>Price</b>: $" + order.calcPrice().toFixed(2) + "</p>";
  return orderHTML;
}

$(document).ready(function() {
  populateDropdowns();
  $("form").submit(function(e) {
    e.preventDefault();
    const cheese = {"kind": $("#cheese").val(), "amount": $("#cheese-amount").val()};
    const sauce = {"kind": $("#sauce").val(), "amount": $("#sauce-amount").val()};
    const firstTopping = {"kind": $("#topping-1").val(), "amount": $("#topping-1-amount").val()};
    const secondTopping = {"kind": $("#topping-2").val(), "amount": $("#topping-2-amount").val()};
    const thirdTopping = {"kind": $("#topping-3").val(), "amount": $("#topping-3-amount").val()};
    const crust = $("#crust").val();
    const size = $("#size").val();

    $("#order-details").html(createOrderHTML(new Order(cheese, sauce, crust, [firstTopping, secondTopping, thirdTopping], size)));
  });
});