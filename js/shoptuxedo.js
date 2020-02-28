localStorage.setItem("picked", 0);

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
      let picked = [];
      function setOne(event) {
        setter = 0;
      }

      function setTwo(event) {
        setter = 1;
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
      for (var i = 0; i < 2; i++) {
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
      }
    });

  //makes sure the add to cart button works by adding objects
}
