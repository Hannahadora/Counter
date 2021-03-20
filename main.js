const counterOutput = document.querySelector('.counter');
const minus = document.querySelector('.minus');
const add = document.querySelector('.add');
const reset = document.querySelector('.reset');
const step = document.querySelector('#step');

let count = 0;

function adjustCounter(){
    adjustColor();
    counterOutput.innerText = count;
}

// function adjustColor() {
// 	if (counter === 0) {
// 		counterOutput.style.color = 'white';
// 	} else if (counter < 0) {
// 		counterOutput.style.color = 'red';
// 	} else if (counter > 0) {
// 		counterOutput.style.color = 'blue';
// 	};
// }

// add.addEventListener('click', clickUp())
//     e.preventDefault(e);

// function clickUp(e) {
// 	counter = total + parseInt(step.value);
// 	adjustCounter();
// }


// minus.addEventListener('click', clickDown())
//     e.preventDefault(e);

// function clickDown(e) {
// 	counter = total - parseInt(step.value);
// 	adjustCounter();
// }


// reset.addEventListener('click', resetCounter())
//     e.preventDefault(e);

// function resetCounter()  {
// 	counter = 0;
// 	adjustCounter();
// }

// adjustCounter();


adjustCounter();

add.addEventListener("click",()=>{
    count++;
    adjustCounter();
}) ;

minus.addEventListener("click",()=>{
    count--;
    adjustCounter();
});

// function adjustColor(){
// 	if (count === 0) {
// 		counterOutput.style.color = 'white';
// 	} else if (counter < 0) {
// 		counterOutput.style.color = 'red';
// 	} else if (counter > 0) {
// 		counterOutput.style.color = 'blue';
// 	};
// };
