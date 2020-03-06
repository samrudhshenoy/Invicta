let picked = JSON.parse(localStorage.getItem("picked"));
if (
    picked == null ||
    picked == undefined ||
    picked == 0 ||
    picked.length == null ||
    picked.length == undefined ||
    picked.length == 0
) {
    picked = [];
}
document.getElementById("picked").innerHTML = picked.length;

//creates efficient loading of the website
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    //creates the shop with the products from products.json
    fetch("products.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            let clothes = [];

            function setThirtyEight(event) {
                setter = 37;
            }

            function setThirtyNine(event) {
                setter = 38;
            }

            function setFourty(event) {
                setter = 39;
            }

            class Cloth {
                constructor(number) {
                    this.number = number;
                    this.title = data.items[number].fields.title;
                    this.price = data.items[number].fields.price;
                    this.image = data.items[number].fields.image.fields.file.url;
                    document.getElementById("title" + number).innerHTML = this.title;
                    document.getElementById("price" + number).innerHTML = this.price;
                    document.getElementById("img" + number).src = this.image;
                }
            }
            for (var i = 37; i < 40; i++) {
                clothes.push(new Cloth(i));
                localStorage.setItem("clothes", JSON.stringify(clothes));
            }

            document.getElementById("picked").innerHTML = picked.length;

            document
                .getElementById("thirtyeight")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtyeight")
                .addEventListener("mouseover", setThirtyEight, false);
            document
                .getElementById("thirtynine")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtynine")
                .addEventListener("mouseover", setThirtyNine, false);
            document
                .getElementById("fourty")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourty")
                .addEventListener("mouseover", setFourty, false);

            function addToCart(event) {
                event.preventDefault();
                picked.push(new Cloth(setter));
                localStorage.setItem("picked", JSON.stringify(picked));

                document.getElementById("picked").innerHTML = picked.length;

                if (setter == 37) {
                    document
                        .getElementById("thirtyeight")
                        .removeEventListener("mouseover", setThirtyEight, false);
                    document
                        .getElementById("thirtyeight")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 38) {
                    document
                        .getElementById("thirtynine")
                        .removeEventListener("mouseover", setThirtyNine, false);
                    document
                        .getElementById("thirtynine")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 39) {
                    document
                        .getElementById("fourty")
                        .removeEventListener("mouseover", setFourty, false);
                    document
                        .getElementById("fourty")
                        .removeEventListener("click", addToCart, false);
                }
            }
        });

    //makes sure the add to cart button works by adding objects
}