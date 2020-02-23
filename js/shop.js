var addCartItems = document.getElementsByClassName("add-to-cart");
console.log(addCartItems);
var counter = 0;
document.getElementById("counter").innerHTML = counter;

$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

for (var i = 0; i < addCartItems.length; i++) {
    var button = addCartItems[i];
    button.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("clicked");
        counter = counter + 1;
        console.log(counter);
        document.getElementById("counter").innerHTML = counter;
    });
}
url =
    "http://samrudhshenoy.github.io/Invicta/cart.html?counter=" +
    encodeURIComponent(counter);
document.location.href = url;