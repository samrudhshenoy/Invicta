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

            function setTwentySix(event) {
                setter = 25;
            }

            function setTwentySeven(event) {
                setter = 26;
            }

            function setTwentyEight(event) {
                setter = 27;
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
            for (var i = 25; i < 28; i++) {
                clothes.push(new Cloth(i));
                localStorage.setItem("clothes", JSON.stringify(clothes));
            }

            document.getElementById("picked").innerHTML = picked.length;

            document
                .getElementById("twentysix")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentysix")
                .addEventListener("mouseover", setTwentySix, false);
            document
                .getElementById("twentyseven")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentyseven")
                .addEventListener("mouseover", setTwentySeven, false);
            document
                .getElementById("twentyeight")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentyeight")
                .addEventListener("mouseover", setTwentyEight, false);

            function addToCart(event) {
                event.preventDefault();
                picked.push(new Cloth(setter));
                localStorage.setItem("picked", JSON.stringify(picked));

                document.getElementById("picked").innerHTML = picked.length;

                if (setter == 25) {
                    document
                        .getElementById("twentysix")
                        .removeEventListener("mouseover", setTwentySix, false);
                    document
                        .getElementById("twentysix")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 26) {
                    document
                        .getElementById("twentyseven")
                        .removeEventListener("mouseover", setTwentySeven, false);
                    document
                        .getElementById("twentyseven")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 27) {
                    document
                        .getElementById("twentyeight")
                        .removeEventListener("mouseover", setTwentyEight, false);
                    document
                        .getElementById("twentyeight")
                        .removeEventListener("click", addToCart, false);
                }
            }
        });

    //makes sure the add to cart button works by adding objects
}