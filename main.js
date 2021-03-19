const counterOutput = document.querySelector('.counter');
const minus = document.querySelector('.minus');
const up = document.querySelector('.add');
const reset = document.querySelector('.reset');
const step = document.querySelector('#step');

let counter = 0;

function adjustCounter(){
    adjustColor();
    counterOutput.innerText = counter;
}

function adjustColor() {
	if (counter === 0) {
		counterOutput.style.color = 'white';
	} else if (counter < 0) {
		counterOutput.style.color = 'red';
	} else if (counter > 0) {
		counterOutput.style.color = 'blue';
	};
}

up.addEventListener('click', clickUp())
    e.preventDefault(e);

function clickUp(e) {
	counter = total + parseInt(step.value);
	adjustCounter();
}


minus.addEventListener('click', clickDown())
    e.preventDefault(e);

function clickDown(e) {
	counter = total - parseInt(step.value);
	adjustCounter();
}


reset.addEventListener('click', resetCounter())
    e.preventDefault(e);

function resetCounter() {
	counter = 0;
	adjustCounter();
}

adjustCounter();
