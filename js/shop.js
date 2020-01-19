var addCartItems = document.getElementsByClassName('add-to-cart')
console.log(addCartItems)
for (var i = 0; i<addCartItems.length; i++){
	var button = addCartItems[i]
	button.addEventListener('click', function(event){
		var buttonClicked = event.target
	})
}