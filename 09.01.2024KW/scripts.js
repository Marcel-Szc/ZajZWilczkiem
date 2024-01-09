function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(hours < 10) {
        hours = "0" + hours;
    }
    else {
        hours = hours;
    }
    console.log("1");

    minutes = (minutes<10) ? "0" + minutes : minutes; 
    console.log("2");
    seconds = (seconds<10) ? "0" + seconds : seconds;
    console.log("3");

    document.getElementById("hours").textContent = hours + ":";
    document.getElementById("minutes").textContent = minutes + ":";
    document.getElementById("seconds").textContent = seconds;

    if(hours >= 8 && minutes >= 23 && seconds >= 0) {
        document.getElementById("hours").style.color="yellow";
        document.getElementById("minutes").style.color="yellow";
        document.getElementById("seconds").style.color="yellow";
    }
    
    var hours2 = parseInt(hours);
    var minutes2 = parseInt(minutes);
    var seconds2 = parseInt(seconds);
    var sum = hours2+minutes2+seconds2;
    document.getElementById("sum").textContent = sum;
}
setInterval(updateClock, 1000);
updateClock();