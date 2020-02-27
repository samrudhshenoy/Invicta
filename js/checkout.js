if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  document.getElementById("tax").innerHTML = JSON.parse(
    localStorage.getItem("tax")
  );
  document.getElementById("Total").innerHTML = JSON.parse(
    localStorage.getItem("Total")
  );
  document.getElementById("GrandTotal").innerHTML = JSON.parse(
    localStorage.getItem("GrandTotal")
  );
  let picked = JSON.parse(localStorage.getItem("picked"));
  if (picked.length == undefined) {
    picked = [];
  }
  document.getElementById("picked").innerHTML = picked.length;
}
