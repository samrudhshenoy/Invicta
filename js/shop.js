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
            let filler = document.getElementsByClassName("product");

            function setOne(event) {
                setter = 0;
            }

            function setTwo(event) {
                setter = 1;
            }

            function setThree(event) {
                setter = 2;
            }

            function setFour(event) {
                setter = 3;
            }

            function setFive(event) {
                setter = 4;
            }

            function setSix(event) {
                setter = 5;
            }

            function setSeven(event) {
                setter = 6;
            }

            function setEight(event) {
                setter = 7;
            }

            function setNine(event) {
                setter = 8;
            }

            function setTen(event) {
                setter = 9;
            }

            function setEleven(event) {
                setter = 10;
            }

            function setTwelve(event) {
                setter = 11;
            }

            function setThirteen(event) {
                setter = 12;
            }

            function setFourteen(event) {
                setter = 13;
            }

            function setFifteen(event) {
                setter = 14;
            }

            function setSixteen(event) {
                setter = 15;
            }

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

            function setTwentySix(event) {
                setter = 25;
            }

            function setTwentySeven(event) {
                setter = 26;
            }

            function setTwentyEight(event) {
                setter = 27;
            }

            function setTwentyNine(event) {
                setter = 28;
            }

            function setThirty(event) {
                setter = 29;
            }

            function setThirtyOne(event) {
                setter = 30;
            }

            function setThirtyTwo(event) {
                setter = 31;
            }

            function setThirtyThree(event) {
                setter = 32;
            }

            function setThirtyFour(event) {
                setter = 33;
            }

            function setThirtyFive(event) {
                setter = 34;
            }

            function setThirtySix(event) {
                setter = 35;
            }

            function setThirtySeven(event) {
                setter = 36;
            }

            function setThirtyEight(event) {
                setter = 37;
            }

            function setThirtyNine(event) {
                setter = 38;
            }

            function setFourty(event) {
                setter = 39;
            }

            function setFourtyOne(event) {
                setter = 40;
            }

            function setFourtyTwo(event) {
                setter = 41;
            }

            function setFourtyThree(event) {
                setter = 42;
            }

            function setFourtyFour(event) {
                setter = 43;
            }

            function setFourtyFive(event) {
                setter = 44;
            }

            function setFourtySix(event) {
                setter = 45;
            }

            function setFourtySeven(event) {
                setter = 46;
            }

            function setFourtyEight(event) {
                setter = 47;
            }

            function setFourtyNine(event) {
                setter = 48;
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
            for (var i = 0; i < filler.length; i++) {
                clothes.push(new Cloth(i));
                localStorage.setItem("clothes", JSON.stringify(clothes));
            }

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
            document
                .getElementById("three")
                .addEventListener("mouseover", setThree, false);

            document
                .getElementById("three")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("four")
                .addEventListener("mouseover", setFour, false);
            document
                .getElementById("four")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("five")
                .addEventListener("mouseover", setFive, false);
            document
                .getElementById("five")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("six")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("six")
                .addEventListener("mouseover", setSix, false);
            document
                .getElementById("seven")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("seven")
                .addEventListener("mouseover", setSeven, false);
            document
                .getElementById("eight")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("eight")
                .addEventListener("mouseover", setEight, false);
            document
                .getElementById("nine")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("nine")
                .addEventListener("mouseover", setNine, false);
            document
                .getElementById("ten")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("ten")
                .addEventListener("mouseover", setTen, false);
            document
                .getElementById("eleven")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("eleven")
                .addEventListener("mouseover", setEleven, false);
            document
                .getElementById("twelve")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twelve")
                .addEventListener("mouseover", setTwelve, false);
            document
                .getElementById("thirteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirteen")
                .addEventListener("mouseover", setThirteen, false);
            document
                .getElementById("fourteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourteen")
                .addEventListener("mouseover", setFourteen, false);
            document
                .getElementById("fifteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fifteen")
                .addEventListener("mouseover", setFifteen, false);
            document
                .getElementById("sixteen")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("sixteen")
                .addEventListener("mouseover", setSixteen, false);
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
            document
                .getElementById("twentynine")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("twentynine")
                .addEventListener("mouseover", setTwentyNine, false);
            document
                .getElementById("thirty")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirty")
                .addEventListener("mouseover", setThirty, false);
            document
                .getElementById("thirtyone")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtyone")
                .addEventListener("mouseover", setThirtyOne, false);
            document
                .getElementById("thirtytwo")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtytwo")
                .addEventListener("mouseover", setThirtyTwo, false);
            document
                .getElementById("thirtythree")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtythree")
                .addEventListener("mouseover", setThirtyThree, false);
            document
                .getElementById("thirtyfour")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtyfour")
                .addEventListener("mouseover", setThirtyFour, false);
            document
                .getElementById("thirtyfive")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtyfive")
                .addEventListener("mouseover", setThirtyFive, false);
            document
                .getElementById("thirtysix")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtysix")
                .addEventListener("mouseover", setThirtySix, false);
            document
                .getElementById("thirtyseven")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("thirtyseven")
                .addEventListener("mouseover", setThirtySeven, false);
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
            document
                .getElementById("fourtyone")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtyone")
                .addEventListener("mouseover", setFourtyOne, false);
            document
                .getElementById("fourtytwo")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtytwo")
                .addEventListener("mouseover", setFourtyTwo, false);
            document
                .getElementById("fourtythree")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtythree")
                .addEventListener("mouseover", setFourtyThree, false);
            document
                .getElementById("fourtyfour")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtyfour")
                .addEventListener("mouseover", setFourtyFour, false);
            document
                .getElementById("fourtyfive")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtyfive")
                .addEventListener("mouseover", setFourtyFive, false);
            document
                .getElementById("fourtysix")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtysix")
                .addEventListener("mouseover", setFourtySix, false);
            document
                .getElementById("fourtyseven")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtyseven")
                .addEventListener("mouseover", setFourtySeven, false);
            document
                .getElementById("fourtyeight")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtyeight")
                .addEventListener("mouseover", setFourtyEight, false);
            document
                .getElementById("fourtynine")
                .addEventListener("click", addToCart, false);
            document
                .getElementById("fourtynine")
                .addEventListener("mouseover", setFourtyNine, false);

            function addToCart(event) {
                event.preventDefault();
                picked.push(new Cloth(setter));
                localStorage.setItem("picked", JSON.stringify(picked));

                document.getElementById("picked").innerHTML = picked.length;
                if (setter == 0) {
                    document
                        .getElementById("one")
                        .removeEventListener("mouseover", setOne, false);
                    document
                        .getElementById("one")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 1) {
                    document
                        .getElementById("two")
                        .removeEventListener("mouseover", setTwo, false);
                    document
                        .getElementById("two")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 2) {
                    document
                        .getElementById("three")
                        .removeEventListener("mouseover", setThree, false);
                    document
                        .getElementById("three")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 3) {
                    document
                        .getElementById("four")
                        .removeEventListener("mouseover", setFour, false);
                    document
                        .getElementById("four")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 4) {
                    document
                        .getElementById("five")
                        .removeEventListener("mouseover", setFive, false);
                    document
                        .getElementById("five")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 5) {
                    document
                        .getElementById("six")
                        .removeEventListener("mouseover", setSix, false);
                    document
                        .getElementById("six")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 6) {
                    document
                        .getElementById("seven")
                        .removeEventListener("mouseover", setSeven, false);
                    document
                        .getElementById("seven")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 7) {
                    document
                        .getElementById("eight")
                        .removeEventListener("mouseover", setEight, false);
                    document
                        .getElementById("eight")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 8) {
                    document
                        .getElementById("nine")
                        .removeEventListener("mouseover", setNine, false);
                    document
                        .getElementById("nine")
                        .removeEventListener("click", setNine, false);
                }
                if (setter == 9) {
                    document
                        .getElementById("ten")
                        .removeEventListener("mouseover", setTen, false);
                    document
                        .getElementById("ten")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 10) {
                    document
                        .getElementById("eleven")
                        .removeEventListener("mouseover", setEleven, false);
                    document
                        .getElementById("eleven")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 11) {
                    document
                        .getElementById("twelve")
                        .removeEventListener("mouseover", setTwelve, false);
                    document
                        .getElementById("twelve")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 12) {
                    document
                        .getElementById("thirteen")
                        .removeEventListener("mouseover", setThirteen, false);
                    document
                        .getElementById("thirteen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 13) {
                    document
                        .getElementById("fourteen")
                        .removeEventListener("mouseover", setFourteen, false);
                    document
                        .getElementById("fourteen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 14) {
                    document
                        .getElementById("fifteen")
                        .removeEventListener("mouseover", setFifteen, false);
                    document
                        .getElementById("fifteen")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 15) {
                    document
                        .getElementById("sixteen")
                        .removeEventListener("mouseover", setSixteen, false);
                    document
                        .getElementById("sixteen")
                        .removeEventListener("click", addToCart, false);
                }
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
                if (setter == 28) {
                    document
                        .getElementById("twentynine")
                        .removeEventListener("mouseover", setTwentyNine, false);
                    document
                        .getElementById("twentynine")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 29) {
                    document
                        .getElementById("thirty")
                        .removeEventListener("mouseover", setThirty, false);
                    document
                        .getElementById("thirty")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 30) {
                    document
                        .getElementById("thirtyone")
                        .removeEventListener("mouseover", setThirtyOne, false);
                    document
                        .getElementById("thirtyone")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 31) {
                    document
                        .getElementById("thirtytwo")
                        .removeEventListener("mouseover", setThirtyTwo, false);
                    document
                        .getElementById("thirtytwo")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 32) {
                    document
                        .getElementById("thirtythree")
                        .removeEventListener("mouseover", setThirtyThree, false);
                    document
                        .getElementById("thirtythree")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 33) {
                    document
                        .getElementById("thirtyfour")
                        .removeEventListener("mouseover", setThirtyFour, false);
                    document
                        .getElementById("thirtyfour")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 34) {
                    document
                        .getElementById("thirtyfive")
                        .removeEventListener("mouseover", setThirtyFive, false);
                    document
                        .getElementById("thirtyfive")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 35) {
                    document
                        .getElementById("thirtysix")
                        .removeEventListener("mouseover", setThirtySix, false);
                    document
                        .getElementById("thirtysix")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 36) {
                    document
                        .getElementById("thirtyseven")
                        .removeEventListener("mouseover", setThirtySeven, false);
                    document
                        .getElementById("thirtyseven")
                        .removeEventListener("click", addToCart, false);
                }
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
                if (setter == 40) {
                    document
                        .getElementById("fourtyone")
                        .removeEventListener("mouseover", setFourtyOne, false);
                    document
                        .getElementById("fourtyone")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 41) {
                    document
                        .getElementById("fourtytwo")
                        .removeEventListener("mouseover", setFourtTwo, false);
                    document
                        .getElementById("fourtytwo")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 42) {
                    document
                        .getElementById("fourtythree")
                        .removeEventListener("mouseover", setFourtyThree, false);
                    document
                        .getElementById("fourtythree")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 43) {
                    document
                        .getElementById("fourtyfour")
                        .removeEventListener("mouseover", setFourtyFour, false);
                    document
                        .getElementById("fourtyfour")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 44) {
                    document
                        .getElementById("fourtyfive")
                        .removeEventListener("mouseover", setFourtyFive, false);
                    document
                        .getElementById("fourtyfive")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 45) {
                    document
                        .getElementById("fourtysix")
                        .removeEventListener("mouseover", setFourtySix, false);
                    document
                        .getElementById("fourtysix")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 46) {
                    document
                        .getElementById("fourtyseven")
                        .removeEventListener("mouseover", setFourtySeven, false);
                    document
                        .getElementById("fourtyseven")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 47) {
                    document
                        .getElementById("fourtyeight")
                        .removeEventListener("mouseover", setFourtyEight, false);
                    document
                        .getElementById("fourtyeight")
                        .removeEventListener("click", addToCart, false);
                }
                if (setter == 48) {
                    document
                        .getElementById("fourtynine")
                        .removeEventListener("mouseover", setFourtyNine, false);
                    document
                        .getElementById("fourtynine")
                        .removeEventListener("click", addToCart, false);
                }
            }
        });

    //makes sure the add to cart button works by adding objects
}