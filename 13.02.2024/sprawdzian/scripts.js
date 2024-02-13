function zegar() 
{
     var dane = new Date();
     var hours = dane.getHours();
     var minutes = dane.getMinutes();
     var seconds = dane.getSeconds();

    if(hours < 10)
    {
        hours = "0" + hours;
    }
    else
    {
        hours = hours;
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
    else
    {
        minutes = minutes;
    }
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }
    else
    {
        seconds = seconds;
    }

    document.getElementById("hours").textContent = hours + ":";
    document.getElementById("minutes").textContent = minutes + ":";
    document.getElementById("seconds").textContent = seconds;


}
setInterval(zegar, 500);
zegar()