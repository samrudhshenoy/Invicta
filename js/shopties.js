let picked = JSON.parse(localStorage.getItem("picked"));
if (picked == null) {
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

            function setSeventeen(event) {
                setter = 16;
            }

            function setEighteen(event) {
                setter = 17;
            }

            function setNineteen(event) {
                setter = 18;
            }

            function setTwenty(event) {
                setter = 19;
            }

            function setTwentyOne(event) {
                setter = 20;
            }

            function setTwentyTwo(event) {
                setter = 21;
            }

            function setTwentyThree(event) {
                setter = 22;
            }

            function setTwentyFour(event) {
                setter = 23;
            }

            function setTwentyFive(event) {
                setter = 24;
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
            for (var i = 16; i < 24; i++) {
                clothes.push(new Cloth(i));
                localStorage.setItem("clothes", JSON.stringify(clothes));
            }

            document.getElementById("picked").innerHTML = picked.length;

            document
                .getElementById("seventeen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("seventeen")
                .addEventListener("mouseover", setSeventeen, false);
            document
                .getElementById("eighteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("eighteen")
                .addEventListener("mouseover", setEighteen, false);
            document
                .getElementById("nineteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("nineteen")
                .addEventListener("mouseover", setNineteen, false);
            document
                .getElementById("twenty")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twenty")
                .addEventListener("mouseover", setTwenty, false);
            document
                .getElementById("twentyone")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentyone")
                .addEventListener("mouseover", setTwentyOne, false);
            document
                .getElementById("twentytwo")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentytwo")
                .addEventListener("mouseover", setTwentyTwo, false);
            document
                .getElementById("twentythree")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentythree")
                .addEventListener("mouseover", setTwentyThree, false);
            document
                .getElementById("twentyfour")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentyfour")
                .addEventListener("mouseover", setTwentyFour, false);
            document
                .getElementById("twentyfive")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentyfive")
                .addEventListener("mouseover", setTwentyFive, false);

            function addToCart(event) {
                event.preventDefault();
                picked.push(new Cloth(setter));
                localStorage.setItem("picked", JSON.stringify(picked));

                document.getElementById("picked").innerHTML = picked.length;

                if (setter == 16) {
                    document
                        .getElementById("seventeen")
                        .removeEventListener("mouseover", setSeventeen, false);
                    document
                        .getElementById("seventeen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 17) {
                    document
                        .getElementById("eighteen")
                        .removeEventListener("mouseover", setEighteen, false);
                    document
                        .getElementById("eighteen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 18) {
                    document
                        .getElementById("nineteen")
                        .removeEventListener("mouseover", setNineteen, false);
                    document
                        .getElementById("nineteen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 19) {
                    document
                        .getElementById("twenty")
                        .removeEventListener("mouseover", setTwenty, false);
                    document
                        .getElementById("twenty")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 20) {
                    document
                        .getElementById("twentyone")
                        .removeEventListener("mouseover", setTwentyOne, false);
                    document
                        .getElementById("twentyone")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 21) {
                    document
                        .getElementById("twentytwo")
                        .removeEventListener("mouseover", setTwentyTwo, false);
                    document
                        .getElementById("twentytwo")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 22) {
                    document
                        .getElementById("twentythree")
                        .removeEventListener("mouseover", setTwentyThree, false);
                    document
                        .getElementById("twentythree")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 23) {
                    document
                        .getElementById("twentyfour")
                        .removeEventListener("mouseover", setTwentyFour, false);
                    document
                        .getElementById("twentyfour")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 24) {
                    document
                        .getElementById("twentyfive")
                        .removeEventListener("mouseover", setTwentyFive, false);
                    document
                        .getElementById("four")
                        .removeEventListener("click", addToCart, false);
                }
            }
        });

    //makes sure the add to cart button works by adding objects
}