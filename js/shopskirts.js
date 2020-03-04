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

      function setTwentyNine(event) {
        setter = 28;
      }
      function setThirty(event) {
        setter = 29;
      }
      function setThirtyOne(event) {
        setter = 30;
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
      for (var i = 28; i < 31; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;


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


      function addToCart(event) {
        event.preventDefault();
        picked.push(new Cloth(setter));
        localStorage.setItem("picked", JSON.stringify(picked));

        document.getElementById("picked").innerHTML = picked.length;

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
      }
    });

  //makes sure the add to cart button works by adding objects
}
