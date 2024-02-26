function Cesarz() {
  var rezultat = "";
  var text = document.getElementById("OG").value;

  if(text == ""){
    document.getElementById("Zaszyfrowany").innerText = "wpisz tekst bambiku";
  }
  else {
  for (var i = 0; i < text.length; i++) {

      var char = text.charCodeAt(i);

      if (char >= 65 && char <= 90) 
      {
        rezultat += String.fromCharCode(((char - 65 + 8) % 26) + 65);
      } 
      else if (char >= 97 && char <= 122) 
      {
        rezultat += String.fromCharCode(((char - 97 + 8) % 26) + 97);
       } else 
       {
         rezultat += tekst[i];
      }
    }
    document.getElementById("Zaszyfrowany").innerText = rezultat;
  }
}
