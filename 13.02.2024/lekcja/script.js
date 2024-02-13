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


function potegi(base, n)
{

   for (let i = 0; i<=n; i++)
   {
   sum = Math.pow(base, i);
   }
   console.log(sum);
} 
