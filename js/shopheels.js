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

      function setThirtyTwo(event) {
        setter = 31;
      }
      function setThirtyThree(event) {
        setter = 32;
      }
      function setThirtyFour(event) {
        setter = 33;
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
      for (var i = 31; i < 34; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;

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

      function addToCart(event) {
        event.preventDefault();
        picked.push(new Cloth(setter));
        localStorage.setItem("picked", JSON.stringify(picked));

        document.getElementById("picked").innerHTML = picked.length;

        if (setter == 32) {
          document
            .getElementById("thirtytwo")
            .removeEventListener("mouseover", setThirtyTwo, false);
          document
            .getElementById("thirtytwo")
            .removeEventListener("click", addToCart, false);
        }
        if (setter == 33) {
          document
            .getElementById("thirtythree")
            .removeEventListener("mouseover", setThirtyThree, false);
          document
            .getElementById("thirtythree")
            .removeEventListener("click", addToCart, false);
        }
        if (setter == 34) {
          document
            .getElementById("thirtyfour")
            .removeEventListener("mouseover", setThirtyFour, false);
          document
            .getElementById("thirtyfour")
            .removeEventListener("click", addToCart, false);
        }
      }
    });

  //makes sure the add to cart button works by adding objects
}
