//creates efficient loading of the website
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
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

            var setter = 0;

            var picked = [];
            document.getElementById("picked").innerHTML = picked.length;

            document
                .getElementById("one")
                .addEventListener("mouseover", setOne, false);

            document
                .getElementById("one")
                .addEventListener("click", addToCart, false);

            document
                .getElementById("two")
                .addEventListener("mouseover", setTwo, false);

            document
                .getElementById("two")
                .addEventListener("click", addToCart, false);

            function setOne(event) {
                setter = 0;
            }

            function setTwo(event) {
                setter = 1;
            }

            function addToCart(event) {
                event.preventDefault();
                picked.push(data.items[setter].fields.title);
                document.getElementById("picked").innerHTML = picked.length;
                if (setter === 0) {
                    document
                        .getElementById("one")
                        .removeEventListener("mouseover", setOne, false);
                    document
                        .getElementById("one")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter === 1) {
                    document
                        .getElementById("two")
                        .removeEventListener("mouseover", setTwo, false);
                    document
                        .getElementById("two")
                        .removeEventListener("click", addToCart, false);
                }
                console.log(picked);
            }
        });

    //makes sure the add to cart button works by adding objects
}