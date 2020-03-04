let picked = JSON.parse(localStorage.getItem("picked"));
if (picked == 0) {
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
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let clothes = [];

      function setEleven(event) {
        setter = 10;
      }
      function setTwelve(event) {
        setter = 11;
      }
      function setThirteen(event) {
        setter = 12;
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
      for (var i = 10; i < 13; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;

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
