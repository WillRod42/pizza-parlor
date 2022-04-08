//Mock Database for pizza parts
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


  let order = new Order({"kind": "None", "amount": "none"}, {"kind": "None", "amount": "none"}, "Thin", [{"kind": "None", "amount": "none"}], "Medium");
  console.log(order.calcPrice());
