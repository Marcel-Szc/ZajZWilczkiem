function kliku() {

    var milim = document.getElementById("mili").value;
    var centym = document.getElementById("centy").value;
    var metr= document.getElementById("metry").value;
    var kilom = document.getElementById("kilo").value;

    if (milim) 
    {
    var mili = parseInt(milim) * 1;
    var centy = parseInt(milim) * 10;
    var metry = parseInt(milim) * 10000;
    var kilo = parseInt(milim) * 10000000;
    document.getElementById("wynikmm").textContent = mili;
    document.getElementById("wynikcm").textContent = centy;
    document.getElementById("wynikm").textContent = metry;
    document.getElementById("wynikkm").textContent = kilo;
    console.log("dziala");
    }
    else if (centym) 
    {
    var mili = parseInt(centym) / 10;
    var centy = parseInt(centym) * 1;
    var metry = parseInt(centym) * 1000;
    var kilo = parseInt(centym) * 1000000;
    document.getElementById("wynikmm").textContent = mili;
    document.getElementById("wynikcm").textContent = centy;
    document.getElementById("wynikm").textContent = metry;
    document.getElementById("wynikkm").textContent = kilo;
    console.log("dziala");
    }
    else if (metr) 
    {
    var mili = parseInt(metr) / 10000;
    var centy = parseInt(metr) / 1000;
    var metry = parseInt(metr) * 1;
    var kilo = parseInt(metr) * 1000;
    document.getElementById("wynikmm").textContent = mili;
    document.getElementById("wynikcm").textContent = centy;
    document.getElementById("wynikm").textContent = metry;
    document.getElementById("wynikkm").textContent = kilo;
    console.log("dziala");
    }
    else if (kilom) 
    {
    var mili = parseInt(kilom) / 10000000;
    var centy = parseInt(kilom) / 1000000;
    var metry = parseInt(kilom) / 1000;
    var kilo = parseInt(kilom) * 1;
    document.getElementById("wynikmm").textContent = mili;
    document.getElementById("wynikcm").textContent = centy;
    document.getElementById("wynikm").textContent = metry;
    document.getElementById("wynikkm").textContent = kilo;
    console.log("dziala");
    }
}