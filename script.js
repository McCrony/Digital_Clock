let seconds = document.querySelector('#seconds')
const date = new Date();

let hour = date.getHours();
let secs = date.getSeconds();

setInterval(() => {
seconds.innerHTML = secs;
}, 1000);