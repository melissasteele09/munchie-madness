//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.
var addSnack = document.querySelector("#snack-btn");
var snack = document.querySelector("#snack");
var snackInfo = document.querySelector("#snack-desc");
var cardContainer = document.querySelector(".grocery-list")

addSnack.addEventListener("click", makeCard);

function makeCard() {
	cardContainer.innerHTML += `
 	<section class="snack-card">
		<p class="snack-info">Snack Item: <input class="snack-info snack-value" type="text" value="${snack.value}"></p>
    <p class="snack-info">Snack Info: <input class="snack-info snack-value" type="text" value="${snackInfo.value}"></p>
    <button class="delete">Delete</button>
  </section>`;
}


//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM
cardContainer.addEventListener("click", deleteCard);

function deleteCard() {
  if (event.target.classList.contains("delete")) {
   event.target.parentElement.remove()
  };
}

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!
//Made it into an input field up top in the makeCard function.


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card
