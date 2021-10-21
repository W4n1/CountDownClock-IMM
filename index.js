const countDate = () => {
    const countDate = new Date("October 20, 2021 00:00:00").getTime();  //inserted is the date we are counting down to, this can be changed 
    const now = new Date (). getTime();
    const gap = countDate -  now;
    
    
};

countDate();