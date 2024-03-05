      /*var tablica = new Array(1,2,3,8,5,9,6,7)
        console.log(tablica);
         for(let i = 1; i <= 1; i++) {
           c = tablica.sort((a, b) => {
              return a - b;
            });
          console.log(c);
        } */
        var tablica1 = new Array();
        var tablica2 = new Array();
        var tablica3 = new Array();
        var tablica4 = new Array();
    function dodaj()
    {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = "";
    tablica1.push(input);
     }
    function licz() {
// kolory
        for (let i = 0; i < tablica1.length; i++) {
        const kolor = (tablica1[i]%2==0) ? 'green': 'red';
        const span = document.createElement('span');
        span.textContent = tablica1[i] + ", ";
        span.style.color = kolor;
        const list = document.getElementById('kolorki');
        list.appendChild(span);
      }
      // suma
      var c = 0;
      for (i = 0; i < tablica1.length; i++)
      {
          c += parseInt(tablica1[i]);
      }
      document.getElementById("suma").innerText = c;
      // tylko parzyste
        for(i = 0; i <= tablica1.length; i++){
            if(tablica1[i] % 2 == 0)
            {
                tablica3.push(tablica1[i]);
            }
        }
        var e = "";
        for ( i = 0; i < tablica3.length; i++)
        {
                 e = e + tablica3[i] + ", ";
        }
        document.getElementById("para").innerText = e;
        // nie parzyste
        for(i = 0; i < tablica1.length; i++){
            if(tablica1[i] % 2 != 0)
            {
                tablica4 += tablica1[i] + ", ";
            }
        }
        document.getElementById("niepara").innerText = tablica4;
        // potegi
        var potega = "";
        for (i=0; i < tablica1.length; i++) {
           potega = potega + Math.pow(parseInt(tablica1[i]), 3) + ", ";
        }
        document.getElementById("pot").innerText = potega;
        // trójkąty
    var mozliwe = 0;
        for(i = 0; i <= tablica1.length; i++){

                document.getElementById("ilemaks").innerText = "można maksymalnie stworzyć "+ Math.floor(tablica1.length / 3) + "  trójkąty, z których " + mozliwe + "  możliwe"; 
        }
    }