let picked = JSON.parse(localStorage.getItem("picked"));
if (picked.length == undefined) {
  picked = [];
}
let Total = 0;
let total = 0;
let GrandTotal = 0;
let tax = 0;
document.getElementById("total0").innerHTML = 0;
document.getElementById("total1").innerHTML = 0;
document.getElementById("total2").innerHTML = 0;
document.getElementById("total3").innerHTML = 0;
document.getElementById("total4").innerHTML = 0;
document.getElementById("total5").innerHTML = 0;
document.getElementById("total6").innerHTML = 0;
document.getElementById("total7").innerHTML = 0;
document.getElementById("total8").innerHTML = 0;
document.getElementById("total9").innerHTML = 0;

let times = 0;
document.getElementById("picked").innerHTML = picked.length;

function call(parameter) {
  var change = document.getElementById("picked").innerHTML;
  document.getElementById("picked").innerHTML = change - 1;
  Total =
    Total - parseFloat(document.getElementById("total" + parameter).innerHTML);
  fakeCheck();
}
function update(parameter) {
  times = document.getElementsByClassName("input-number")[parameter].value;
  total = picked[parameter].price * times;
  total = total * 100;
  total = Math.trunc(total);
  total = total / 100;
  document.getElementById("total" + parameter).innerHTML = total;
  check();
}
for (var i = 0; i < picked.length; i++) {
  document.getElementById("title" + i).innerHTML = picked[i].title;
  document.getElementById("price" + i).innerHTML = picked[i].price;
  document.getElementById("img" + i).src = picked[i].image;
  times = document.getElementsByClassName("input-number")[i].value;
  total = picked[i].price * times;
  total = total * 100;
  total = Math.trunc(total);
  total = total / 100;
  document.getElementById("total" + i).innerHTML = total;
  Total = total + Total;
  Total = Total * 100;
  Total = Math.trunc(Total);

  Total = Total / 100;
}
check();
function check() {
  Total =
    parseFloat(document.getElementById("total0").innerHTML) +
    parseFloat(document.getElementById("total1").innerHTML) +
    parseFloat(document.getElementById("total2").innerHTML) +
    parseFloat(document.getElementById("total3").innerHTML) +
    parseFloat(document.getElementById("total4").innerHTML) +
    parseFloat(document.getElementById("total5").innerHTML) +
    parseFloat(document.getElementById("total6").innerHTML) +
    parseFloat(document.getElementById("total7").innerHTML) +
    parseFloat(document.getElementById("total8").innerHTML) +
    parseFloat(document.getElementById("total9").innerHTML);
  tax = Total * 0.0925;
  tax = tax * 100;
  tax = Math.trunc(tax);
  tax = tax / 100;
  Total = Total * 100;
  Total = Math.trunc(Total);

  Total = Total / 100;
  document.getElementById("Total").innerHTML = Total;

  document.getElementById("tax").innerHTML = tax;
  GrandTotal = Total + tax;
  GrandTotal = GrandTotal * 100;
  GrandTotal = Math.trunc(GrandTotal);
  GrandTotal = GrandTotal / 100;
  document.getElementById("GrandTotal").innerHTML = GrandTotal;
  localStorage.setItem("GrandTotal", GrandTotal);
  localStorage.setItem("tax", tax);
  localStorage.setItem("Total", Total);
}

function fakeCheck() {
  tax = Total * 0.0925;
  tax = tax * 100;
  tax = Math.trunc(tax);
  tax = tax / 100;
  document.getElementById("Total").innerHTML = Total;

  document.getElementById("tax").innerHTML = tax;
  GrandTotal = Total + tax;
  GrandTotal = GrandTotal * 100;
  GrandTotal = Math.trunc(GrandTotal);
  GrandTotal = GrandTotal / 100;
  document.getElementById("GrandTotal").innerHTML = GrandTotal;
}

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");

if (picked.length == 0) {
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 1) {
  two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 2) {
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 3) {
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 4) {
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 5) {
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 6) {
  seven.style.display = "none";
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 7) {
  eight.style.display = "none";
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 8) {
  nine.style.display = "none";
  ten.style.display = "none";
}
if (picked.length == 9) {
  ten.style.display = "none";
}
