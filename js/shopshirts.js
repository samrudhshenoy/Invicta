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

      function setEight(event) {
        setter = 7;
      }
      function setNine(event) {
        setter = 8;
      }
      function setTen(event) {
        setter = 9;
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
      for (var i = 7; i < 10; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;

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

      function addToCart(event) {
        event.preventDefault();
        picked.push(new Cloth(setter));
        localStorage.setItem("picked", JSON.stringify(picked));

        document.getElementById("picked").innerHTML = picked.length;

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
      }
    });

  //makes sure the add to cart button works by adding objects
}
