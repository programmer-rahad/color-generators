export const customSelector = (selector, areAll) => {
    return areAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}
// Buttons
export function RippleButton() {
    this.button = document.querySelector('.button--ripple');
    if (!this.button) return;
    this.eventListeners = function () {
        this.button.addEventListener('mouseenter', function () {
            var x = event.pageX - this.offsetLeft;
            var y = event.pageY - this.offsetTop;

            this.style.setProperty('--left', x + 'px');
            this.style.setProperty('--top', y + 'px');

        })
    }
    this.init = function () {
        this.eventListeners();
    }

    this.init();

}

// Animation
export function SlideUp(element, duration = 450) {
    var height = element.firstElementChild.offsetHeight + 'px';
    var style = {
        'transition-duration': duration + 'ms',
        'overflow': 'hidden',
        height,
    }
    Object.assign(element.style, style)
    setTimeout(function () {
        element.style.height = 0;
    });
}
export function SlideDown(element, duration = 450) {
    var height = element.firstElementChild.offsetHeight + 'px';
    var style = {
        'transition-duration': 0 + 'ms',
        'overflow': 'hidden',
        height: 0,
    }
    Object.assign(element.style, style)
    setTimeout(function () {
        element.style.transitionDuration = duration + 'ms';
        element.style.height = height;
    });
}
export function SlideToggle(element) {
    var elementHeight = element.offsetHeight;
    var height = element.firstElementChild.offsetHeight + 'px';

    if (!elementHeight) {
        element.style.height = height;
    } else {
        element.style.height = height;
        setTimeout(function () {
            element.style.height = 0;
        })
    }
}
// Date Time 
export function Clock() {
    var date = new Date()
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.ampm = this.hours > 11 ? 'pm' : 'am';
    this.hours = this.hours > 12 ? this.hours - 12 : !this.hours ? 12 : this.hours;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
}
// Number 
export const randomIndex = arr => {
    return Math.floor(Math.random() * arr.length);

    // Code for Handle Duplicate Index

    // Way 1
    //  if (lastIndex === index) {
    //     if (lastIndex === colors.length - 1) {
    //         index = index - 1;
    //     } else {
    //         index = index + 1;
    //     }
    // }
    // Way 2
    // if(this.index === this.lastIndex) {    
    //     const indexes = [...colors].map((el,i) => i);          
    //     indexes.splice(this.index,1);
    //     this.index = indexes[randomIndex(indexes)]
    // }

}
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const getData1 = async url => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
export function getData2(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        callback(data)
    }
    xhr.open('get', url, true);
    xhr.send();
}
export async function getData3(url) {
    try {
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        var data = await response.json();
        // setColors(data); 
    } catch (err) {
        console.log('Wrong URL');
    }
    // getDataAsync(url);
}
// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.log(error))
export function toggle(current, first, second) {
    if (current !== first) return first;
    else return second;
}
// Remove Item From Array
export const removeItem = (array, id) => {
    const filteredArray = array.filter((el => el.id !== id));
    return filteredArray;
}
