var addCartItems = document.getElementsByClassName("add-to-cart");
console.log(addCartItems);
var counter = 0;
document.getElementById("counter").innerHTML = counter;

for (var i = 0; i < addCartItems.length; i++) {
    var button = addCartItems[i];
    button.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("clicked");
        counter++;
        console.log(counter);
        document.getElementById("counter").innerHTML = counter;
    });
}