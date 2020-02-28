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

      function setSix(event) {
        setter = 5;
      }
      function setSeven(event) {
        setter = 6;
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


      clothes.push(new Cloth(5));
      localStorage.setItem("clothes", JSON.stringify(clothes));

      clothes.push(new Cloth(6));
      localStorage.setItem("clothes", JSON.stringify(clothes));

      clothes.push(new Cloth(24));
      localStorage.setItem("clothes", JSON.stringify(clothes));



      document.getElementById("picked").innerHTML = picked.length;

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
        if (setter == 24) {
          document
            .getElementById("twentyfive")
            .removeEventListener("mouseover", setTwentyFive, false);
          document
            .getElementById("twentyfive")
            .removeEventListener("click", addToCart, false);
        }
      }
    });

  //makes sure the add to cart button works by adding objects
}
