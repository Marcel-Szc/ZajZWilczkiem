/*for(let i=1; i<=10; i++)
{
    console.log(i);
} */
/*let liczba;


do {
    liczba = prompt("podaj liczbe wieksza od 10: ", "");
}
while (liczba <= 10);

console.log("Dziena!") */
/*function szukaj() 
{
    console.clear;
    let liczba;
    let proby = 0;
    
    do {
        liczba = Math.floor(Math.random()*5)+1;
        proby++;
        console.log(`Próba ${proby}: ${liczba}`);
    }
    while(liczba !== 3);

    console.log(`Znaleziono liczbe 3 po ${proby} probach`)
} */
/* let suma = 0;
for (let i=1; i<=10; i++)
{
    suma +=i;
    

    console.log(suma);
} */
/* for (let i = 1; i <=10; i++)
{
    let poziom = '';
    for(let j = 10; j >= i; j--)
    {
        poziom += '*';
    }
   

    console.log(poziom);
} */
/*for (let i = 0; i <= 20; i++)
{   let poziom = '0'
    for (let k = 0; k <= 20 - i; k++)
    {
        poziom += ' ';
    }
    for (let j = 1; j <=2*i-1; j++)
    {
        poziom += '*'
    }
    console.log(poziom);
} */
/*for( let i = 100; i >= 0; i--)
{
    if(i%10 == 0)
    {
        console.log(i);
    }
} */
/*function potegi(base, n)
{

   for (let i = 0; i<=n; i++)
   {
   sum = Math.pow(base, i);
   }
   console.log(sum);
} 
*/

function kwadraty() 
{
     document.getElementById("Hero").innerText = ""

     var ile = document.getElementById("ile").value;
     var a1 = document.getElementById("a1").value;
     var b1 = document.getElementById("b1").value;
     var Red = document.getElementById("Red").value;
     var Green = document.getElementById("Green").value;
     var Blue = document.getElementById("Blue").value;
     var los = document.getElementById("Los").value
     for (let i = 0; i < ile; i++)
     {
        var kwadrat = document.createElement("div");
        kwadrat.style.width = a1 + "px";
        kwadrat.style.height = b1 + "px";
        kwadrat.style.backgroundColor = "rgb(" + Red + ", " + Green + ", " + Blue + ")";
        document.getElementById("Hero").appendChild(kwadrat);
        document.getElementById("Hero").appendChild(kwadrat).textContent = i + 1;
        if (document.getElementById("check").checked){
           if ((i + 1) % 2 == 0) {
           var trojakt = document.createElement("div");
           document.getElementById("Hero").appendChild(kwadrat). appendChild(trojakt);
           trojakt.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
           trojakt.style.border = "20px red solid";
         }
        }
       if ((i+1) % 7 == 0) {
        kwadrat.style.border = "black 2px solid";
        kwadrat.style.borderRadius = "100px";
       }
    }
    if(Math.floor(Math.random()*ile+1) == los) 
    {
        alert(" Gratulacje wygrałeś, liczba to: " + Math.floor(Math.random()*ile+1));
    }
};
