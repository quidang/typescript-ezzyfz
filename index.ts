// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const output: HTMLElement = document.getElementById('custome-output');

const button: HTMLElement = document.getElementById('custom-btn')
button.addEventListener('click', fizzbuzz);

function fizzbuzz () {
  // count= 100
  for (let i = 0; i < 100; i++) {

    if (i % 3 == 0) {
      output.innerHTML += '<div>fizzbuzz ' + i + '</div>'

    } else if (i % 3 == 0) {
      output.innerHTML += '<div>fizzbuzz ' + i + '</div>'

    } else if (i % 5 == 0) {
      output.innerHTML += '<div>fizzbuzz ' + i + '</div>'
    }
  }
}