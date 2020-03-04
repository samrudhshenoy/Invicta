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

      function setThree(event) {
        setter = 2;
      }
      function setFour(event) {
        setter = 3;
      }
      function setFive(event) {
        setter = 4;
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
      for (var i = 2; i < 5; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;

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

      function addToCart(event) {
        event.preventDefault();
        picked.push(new Cloth(setter));
        localStorage.setItem("picked", JSON.stringify(picked));

        document.getElementById("picked").innerHTML = picked.length;

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
      }
    });

  //makes sure the add to cart button works by adding objects
}
