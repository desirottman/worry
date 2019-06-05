function toggleContent() {
	const front = document.getElementById("front");
	const identify = document.getElementById("identify");
	front.classList.toggle("hide");
	identify.classList.toggle("hide");
}

function answerYes() {
	const identify = document.getElementById("identify");
	const action = document.getElementById("action");
	identify.classList.toggle("hide");
	action.classList.toggle("hide");
}

function answerNo() {
	const later = document.getElementById("later");
	const identify = document.getElementById("identify");
	later.classList.toggle("hide");
	identify.classList.toggle("hide");
}

function shift() {
	const shift = document.getElementById("shift");
	const later = document.getElementById("later");
	shift.classList.toggle("hide");
	later.classList.toggle("hide");
}

function resources() {
	const shift = document.getElementById("shift");
	const resources = document.getElementById("resources");
	shift.classList.toggle("hide");
	resources.classList.toggle("hide");
}

function answerNow() {
	const now = document.getElementById("now");
	const action = document.getElementById("action");
	now.classList.toggle("hide");
	action.classList.toggle("hide");
}

function later() {

	const action = document.getElementById("action");
	const later = document.getElementById("later");
	action.classList.toggle("hide");
	later.classList.toggle("hide");
}

function done() {
	const now = document.getElementById("now");
	const shift = document.getElementById("shift");
	now.classList.toggle("hide");
	shift.classList.toggle("hide");
}


// fadeIn fadeOut stuff

const toggleButton = document.getElementById('toggle');
const text = document.getElementsByClassName('front');

// can i make const text `getElementsbyClass('section');`?

text.addEventListener('transitionend', () => {
  if (text.style.opacity === 0) {
    text.style.display = 'none';
  }
});


toggleButton.addEventListener('click', () => {
  if (getComputedStyle(text).opacity == 0) {
    text.style.display = 'block';
    requestAnimationFrame(() => {
      text.style.opacity = 1;
    });
  } else {
    text.style.opacity = 0;
  }
});