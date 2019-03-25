var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.querySelector('#gradient');

var toRightButton = document.querySelector('.toRight');
var toLeftButton = document.querySelector('.toLeft');
var toTopButton = document.querySelector('.toTop');
var toBottomButton = document.querySelector('.toBottom');
var direction = "to right";

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

function setGradient(){
	body.style.background = 'linear-gradient('
	+ direction + ',' 
	+ color1.value 
	+ ',' 
	+ color2.value 
	+ ')';

	css.textContent = body.style.background;

};

var radioButtons = [toRightButton, toLeftButton, toTopButton, toBottomButton];

for(radio in radioButtons) {
    radioButtons[radio].onclick = function() {
        if (toRightButton.checked === true){
			direction = "to right";
			setGradient();
		} else if (toLeftButton.checked === true){
			direction = 'to left';
			setGradient();
		}  else if (toTopButton.checked === true){
			direction = 'to top';
			setGradient();
		}  else if (toBottomButton.checked === true){
			direction = 'to bottom';
			setGradient();
		}  
    }
}







