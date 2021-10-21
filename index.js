const countDate = () => {
    const countDate = new Date("December 25, 2021 00:00:00").getTime();  //inserted is the date we are counting down to, this can be changed 
    const now = new Date().getTime();
    const gap = countDate -  now;
    
    
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

    //updating HTML
    document.querySelector('.day'). innerText = textDay;
    document.querySelector('.hour'). innerText = textHour;
    document.querySelector('.minute'). innerText = textMinute;
    document.querySelector('.second'). innerText = textSecond;


};

countDate();