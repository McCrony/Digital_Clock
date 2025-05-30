//DOM ELEMENTS

const hourElement = document.querySelector('#hrs'),
    minElement = document.querySelector('#min'),
    secElement = document.querySelector('#secs'),
    am_pmElement = document.querySelector('.am-pm');

// A FUNCTION AND CALLING IT EVERY SECOND


setInterval(()=>{
    let date = new Date();
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
        
        hourElement.textContent = hours;
        minElement.textContent = minutes;
        secElement.textContent = seconds;

        if(hours < 12){
            hourElement.textContent = `0${hours}`;
        }
    
        if(minutes < 10){
            minElement.textContent = `0${minutes}`;
        }
    
        if(seconds < 10){
            secElementElement.textContent = `0${seconds}`;
        }
}, 1000)