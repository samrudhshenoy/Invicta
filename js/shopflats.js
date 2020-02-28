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
      for (var i = 46; i < 49; i++) {
        clothes.push(new Cloth(i));
        localStorage.setItem("clothes", JSON.stringify(clothes));
      }

      document.getElementById("picked").innerHTML = picked.length;


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
