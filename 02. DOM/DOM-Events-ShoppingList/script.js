var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// Adding delete button and removing li el

	var deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	li.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleteListElement);

	function deleteListElement(event){
		event.target.parentElement.remove('li');
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// EXERCISES-------

// add toggle .done off/on

ul.addEventListener('click', toggleDone);
function toggleDone(event){
	if (event.target.nodeName === 'LI'){
		var  li = event.target;
		li.classList.toggle('done');
	}
}


