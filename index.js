const countDown = () => {
    const countDown = new Date("October 21, 2021 23:40:00").getTime();  //inserted the date you would like to count down from
    const now = new Date().getTime();
    const gap = countDown -  now;
    
    
    //Time in second, minutes, hours and days 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // calculation
    const textDay = Math.floor(gap / day);   // math.floor rounds a digit to the nearest number
    const textHour = Math.floor((gap % day) / hour);  // this sign % means a remainder of a value
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //updating and connecting to the HTML file
    document.querySelector('.day'). innerText = textDay;
    document.querySelector('.hour'). innerText = textHour;
    document.querySelector('.minute'). innerText = textMinute;
    document.querySelector('.second'). innerText = textSecond;

    console.log(gap);
};

setInterval(countDown, 1000); //set interval to run every single second 
