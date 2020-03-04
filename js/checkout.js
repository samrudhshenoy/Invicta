let picked = JSON.parse(localStorage.getItem("picked"));
if (picked == 0) {
  picked = [];
}
document.getElementById("picked").innerHTML = picked.length;
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
let tax = JSON.parse(localStorage.getItem("tax"));
let Total = JSON.parse(localStorage.getItem("Total"));
let GrandTotal = JSON.parse(localStorage.getItem("GrandTotal"));
let premium = false;
var n = 0.0;
document.getElementById("delivery").innerHTML = n.toFixed(2);

function ready() {
  document.getElementById("tax").innerHTML = tax.toFixed(2);
  document.getElementById("Total").innerHTML = Total;
  document.getElementById("GrandTotal").innerHTML = GrandTotal;
  console.log(GrandTotal);
  let picked = JSON.parse(localStorage.getItem("picked"));
  if (picked.length == null) {
    picked = [];
  }
  document.getElementById("picked").innerHTML = picked.length;
}

function addPremium() {
  if (premium == false) {
    var n = 3.99;
    n.toFixed(2);
    GrandTotal = GrandTotal + 3.99;

    GrandTotal = GrandTotal * 100;
    GrandTotal = Math.trunc(GrandTotal);
    GrandTotal = GrandTotal / 100;
    document.getElementById("GrandTotal").innerHTML = GrandTotal;
    premium = true;
    document.getElementById("delivery").innerHTML = n.toFixed(2);
  }
}
function subtractPremium() {
  if (premium == true) {
    var n = 0.0;
    n.toFixed(2);
    GrandTotal = GrandTotal - 3.99;
    GrandTotal = GrandTotal * 100;
    GrandTotal = Math.trunc(GrandTotal);
    GrandTotal = GrandTotal / 100;
    document.getElementById("GrandTotal").innerHTML = GrandTotal;
    document.getElementById("delivery").innerHTML = n.toFixed(2);
    premium = false;
  }
}
