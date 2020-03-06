let picked = JSON.parse(localStorage.getItem("picked"));
if (
    picked == null ||
    picked == undefined ||
    picked == 0 ||
    picked.length == null ||
    picked.length == undefined ||
    picked.length == 0
) {
    picked = [];
}
document.getElementById("picked").innerHTML = picked.length;
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
document.getElementById("total10").innerHTML = 0;
document.getElementById("total11").innerHTML = 0;
document.getElementById("total12").innerHTML = 0;
document.getElementById("total13").innerHTML = 0;
document.getElementById("total14").innerHTML = 0;
document.getElementById("total15").innerHTML = 0;
document.getElementById("total16").innerHTML = 0;
document.getElementById("total17").innerHTML = 0;
document.getElementById("total18").innerHTML = 0;
document.getElementById("total19").innerHTML = 0;

let times = 0;
document.getElementById("picked").innerHTML = picked.length;

function call(parameter) {
    event.preventDefault();

    let store = JSON.parse(localStorage.getItem("picked"));
    console.log(store);
    console.log(parameter);
    if (parameter > 0) store.splice(0, parameter);
    else store.shift();

    localStorage.setItem("picked", JSON.stringify(store));
    let picked = JSON.parse(localStorage.getItem("picked"));

    document.getElementById("picked").innerHTML = picked.length;

    Total = Total - document.getElementById("total" + parameter).innerHTML;
    fakeCheck();
}

function update(parameter) {
    times = document.getElementsByClassName("input-number")[parameter].value;
    total = picked[parameter].price * times;

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
        parseFloat(document.getElementById("total9").innerHTML) +
        parseFloat(document.getElementById("total10").innerHTML) +
        parseFloat(document.getElementById("total11").innerHTML) +
        parseFloat(document.getElementById("total12").innerHTML) +
        parseFloat(document.getElementById("total13").innerHTML) +
        parseFloat(document.getElementById("total14").innerHTML) +
        parseFloat(document.getElementById("total15").innerHTML) +
        parseFloat(document.getElementById("total16").innerHTML) +
        parseFloat(document.getElementById("total17").innerHTML) +
        parseFloat(document.getElementById("total18").innerHTML) +
        parseFloat(document.getElementById("total19").innerHTML);
    tax = Total * 0.0925;
    tax = tax * 100;
    tax = Math.trunc(tax);
    tax = tax / 100;
    Total = Total * 100;
    Total = Math.trunc(Total);

    Total = Total / 100;
    document.getElementById("Total").innerHTML = Total;

    document.getElementById("tax").innerHTML = tax.toFixed(2);
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
    document.getElementById("Total").innerHTML = Total.toFixed(2);

    document.getElementById("tax").innerHTML = tax.toFixed(2);
    GrandTotal = Total + tax;
    GrandTotal = GrandTotal * 100;
    GrandTotal = Math.trunc(GrandTotal);
    GrandTotal = GrandTotal / 100;
    document.getElementById("GrandTotal").innerHTML = GrandTotal.toFixed(2);
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
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");
let thirteen = document.getElementById("thirteen");
let fourteen = document.getElementById("fourteen");
let fifteen = document.getElementById("fifteen");
let sixteen = document.getElementById("sixteen");
let seventeen = document.getElementById("seventeen");
let eighteen = document.getElementById("eighteen");
let nineteen = document.getElementById("nineteen");
let twenty = document.getElementById("twenty");

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
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
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
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
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
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 3) {
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 4) {
    five.style.display = "none";
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 5) {
    six.style.display = "none";
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 6) {
    seven.style.display = "none";
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 7) {
    eight.style.display = "none";
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 8) {
    nine.style.display = "none";
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 9) {
    ten.style.display = "none";
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 10) {
    eleven.style.display = "none";
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 11) {
    twelve.style.display = "none";
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 12) {
    thirteen.style.display = "none";
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 13) {
    fourteen.style.display = "none";
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 14) {
    fifteen.style.display = "none";
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 15) {
    sixteen.style.display = "none";
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}
if (picked.length == 16) {
    seventeen.style.display = "none";
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}

if (picked.length == 17) {
    eighteen.style.display = "none";
    nineteen.style.display = "none";
    twenty.style.display = "none";
}

if (picked.length == 18) {
    nineteen.style.display = "none";
    twenty.style.display = "none";
}

if (picked.length == 19) {
    twenty.style.display = "none";
}