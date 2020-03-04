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
      let picked = [];

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
      for (var i = 13; i < 16; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;

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

      function addToCart(event) {
        event.preventDefault();
        picked.push(new Cloth(setter));
        localStorage.setItem("picked", JSON.stringify(picked));

        document.getElementById("picked").innerHTML = picked.length;

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
      }
    });

  //makes sure the add to cart button works by adding objects
}
