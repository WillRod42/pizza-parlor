Describe: calcPrice()<br>
<br>
Test: "If called on an order that has missing attributes it should return 0"<br>
Code:
```
let order = new Order();
order.calcPrice();
```
Expected-Output: 0

Test: "If given an order that has no cheese, no sauce, thin/normal crust, and no toppings selected and is medium sized to should return 2.5"
Code:
```
let order = new Order({"kind": "none", "amount": "none"}, {"kind": "none", "amount": "none"}, "thin", [{"kind": "none", "amount": "none"}], "medium");
order.calcPrice();
```
Expected-Output: 2.5