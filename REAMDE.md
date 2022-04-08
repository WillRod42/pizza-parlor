Describe: calcPrice()<br>
<br>
Test: "If called on an order that has missing attributes it should return 0"<br>
Code:
```
let order = new Order();
order.calcPrice();
```
Expected-Output: 0

Test: "If given an order that has no cheese, no sauce, thin/normal crust, and no toppings selected and is medium sized it should return 2.5"<br>
Code:
```
let order = new Order({"kind": "None", "amount": "none"}, {"kind": "None", "amount": "none"}, "Thin", [{"kind": "None", "amount": "none"}], "Medium");
order.calcPrice();
```
Expected-Output: 2.5

Test: "If given an order that has cheese, sauce, crust, and toppings with normal amounts selected and is medium sized it should return 6"<br>
Code:
```
let order = new Order({"kind": "Normal", "amount": "normal"}, {"kind": "Normal", "amount": "normal"}, "Normal", [{"kind": "Pepperoni", "amount": "normal"}], "Medium");
order.calcPrice();
```
Expected-Output: 6



Describe: calcPartPrice()

Test: "If given 'none' as the part amount it should return 0"<br>
Code:
```
calcPartPrice({kind: "Normal", amount: "none"}, "cheese");
```
Expected-Output: 0

Test: "If given 'none' as the pizza part kind it should return 0"<br>
Code:
```
calcPartPrice({kind: "None", amount: "none"}, "cheese");
```
Expected-Output: 0

Test: "If not given 'normal' as amount it should return unmodified pizza part prize"<br>
Code:
```
calcPartPrice({kind: "Normal", amount: "normal"}, "cheese");
```
Expected-Output: 1