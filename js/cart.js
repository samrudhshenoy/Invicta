if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var itemsInCart = document.getElementsByClassName("text-center");
    document.getElementById("myText").innerHTML = itemsInCart;
    var removeCartItemButtons = document.getElementsByClassName("product-remove");
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateItemsInCart();
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("table")[0];
    var cartRows = cartItemContainer.getElementsByClassName("text-center");
    var total = 0;
    var oneTotal = 0;
    for (var i = 1; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("price")[0];
        var quantityElement = cartRow.getElementsByClassName("quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));

        var quantity = quantityElement.getElementsByClassName("quantity")[0];
        var realQuantity = quantity.value;
        oneTotal = price * realQuantity;
        cartRow.getElementsByClassName("total")[0].innertext = "$" + oneTotal;
        total = total + price * realQuantity;
    }
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}