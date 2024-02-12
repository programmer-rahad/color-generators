import { customSelector as $, Clock } from "./utils.js";


function RandomColorGenerator(container, total = 50) {
 var colorCodes = 'abcdef0123456789';
 this.colorsDOM = container.querySelector('.color-items');
 this.changeButton = container.querySelector('.button');



 this.changeColors = function () {
  this.colorsDOM.innerText = '';
  for (let i = 0; i < total; i++) {
   var color = '#';
   for (let i = 0; i < 6; i++) {
    color += colorCodes[Math.floor(Math.random() * colorCodes.length)]
   }
   var div = document.createElement('div');
   div.className = 'color-item d-grid align-items-center radius-5 text-white text-6 letter-spacing-2 text-bold'
   div.innerHTML = `<span>${color}</span>`;
   div.style.backgroundColor = color;
   this.colorsDOM.append(div);
   div.addEventListener('click', function () {
    navigator.clipboard.writeText(this.innerText);
    alert('Copied: ' + this.innerText);
   })
  }
 }

 this.events = function () {
  this.changeButton.addEventListener('click', function () {
   this.changeColors();
   this.colorsDOM.animate([
    {
     opacity: 0
    },
    {
     opacity: 1
    }
   ], {
    duration: 300
   })
  }.bind(this));
 }

 this.reset = function () {
  this.changeColors();
  this.events();
 }
 this.init = function () {
  this.reset();
 }
 this.init();

}


function App() {
 // Random Color Generator
 var container = $('.random-color-generator');
 new RandomColorGenerator(container, 45);

}





document.addEventListener('DOMContentLoaded', function () {
 new App();
})



// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);