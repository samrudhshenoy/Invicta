//creates the shop with the products from products.json
fetch("../products.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        var cloth1 = data.items[0].fields.title;
        document.getElementById("cloth1").innerHTML = cloth1;
        var price1 = data.items[0].fields.price;
        document.getElementById("price1").innerHTML = price1;
        var cloth2 = data.items[1].fields.title;
        document.getElementById("cloth2").innerHTML = cloth2;
        var price2 = data.items[1].fields.price;
        document.getElementById("price2").innerHTML = price2;
    });
//makes sure the add to cart button works by adding objects
var addCartItems = document.getElementsByClassName("add-to-cart");
console.log(addCartItems);
var picked = [];
console.log(picked.length);
document.getElementById("picked").innerHTML = picked.length;

// for (var i = 0; i < addCartItems.length; i++) {
// var button = addCartItems[i];
// button.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("clicked");

//     document.getElementById("picked").innerHTML = picked.length;
// });
//     var buttons = document.getElementsByClassName("addCartItems");
//     var buttonsCount = buttons.length;
//     for (var i = 0; i <= buttonsCount; i += 1) {
//         buttons[i].onclick = function(e) {
//             console.log(this.id);
//         };
//     }​
// }