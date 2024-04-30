// Add
{
    function add(){
        var liczba = document.getElementById("amount").value;
        var liczbaa = parseInt(liczba);
        liczbaa = liczbaa + 1;
        document.getElementById("amount").value = liczbaa;
      }
    
      function minus(){
        var liczba = document.getElementById("amount").value;
        var liczbaa = parseInt(liczba);
            
        if(liczbaa == 0){
          alert("Nie możesz mieć mniej niż 0 butów");
        }else{
          liczbaa = liczbaa - 1;
        }
        
        document.getElementById("amount").value = liczbaa;
      }
}
// IMAGES
{
var zdj = "none";
function imageChange() {
    document.getElementById("imageBig").style.backgroundImage = zdj;
}
function image1() {
   zdj = "url(images/image-product-1.jpg)"
   imageChange();
}
function image2() {
   zdj = "url(images/image-product-2.jpg)"
   imageChange();
}
function image3() {
   zdj = "url(images/image-product-3.jpg)"
   imageChange();
}
function image4() {
   zdj = "url(images/image-product-4.jpg)"
   imageChange();
}

var zdj2 = "none";
function imageChange2() {
    document.getElementById("imageBig2").style.backgroundImage = zdj2;
}
function image5() {
   zdj2 = "url(images/image-product-1.jpg)"
   imageChange2();
}
function image6() {
   zdj2 = "url(images/image-product-2.jpg)"
   imageChange2();
}
function image7() {
   zdj2 = "url(images/image-product-3.jpg)"
   imageChange2();
}
function image8() {
   zdj2 = "url(images/image-product-4.jpg)"
   imageChange2();
}
function zamknij() {
    document.getElementById("HRv2BG").style.display = "none";
    document.getElementById("HRv2").style.display = "none";
}
function pokaz() {
    document.getElementById("HRv2BG").style.display = "block";
    document.getElementById("HRv2").style.display = "block";
}
}
// Koszyk
{
var iloscProduktow = 0;
function deleteCart() {
    document.getElementById("amount").value = 0;
    addToCart();
    CartContent();
}
function addToCart() {
   var amount = document.getElementById("amount").value; 
   iloscProduktow = amount;
   if (iloscProduktow == 0) {
    document.getElementById("CartText").style.display = "block";
    document.getElementById("CartContent").style.display = "none";
    }
    else if (iloscProduktow < 0) {
        alert("Proszę podać poprawną ilość par butów!")
    }
    else {
    document.getElementById("CartText").style.display = "none";
    document.getElementById("CartContent").style.display = "block";
    var wynik = 125 * amount;
    document.getElementById("CCTMBLeft").innerHTML = "$125.00 x  " + amount + "  ";
    document.getElementById("CCTMBRight").innerHTML = "$"+ wynik + ".00";
    document.getElementById("amount").value = 0;
    }
}
function CartContent() {
if (iloscProduktow == 0) {
    document.getElementById("CartText").style.display = "block";
    document.getElementById("CartContent").style.display = "none";
}
else if (iloscProduktow < 0) {
    alert("Proszę podać poprawną ilość par butów!")
}
else {
    document.getElementById("CartText").style.display = "none";
    document.getElementById("CartContent").style.display = "";
}
}
var koszOtwarty = 0;
function openCart(){
    document.getElementById("ShopCart").style.display = "block";
    koszOtwarty = 1;
}
function closeCart() {
    document.getElementById("ShopCart").style.display = "none";
    koszOtwarty = 0;
}
function cart() {
    CartContent();
    if(koszOtwarty == 0) {
        openCart();
    }
    else if (koszOtwarty == 1) {
        closeCart();
    }
    else {
        alert("BŁĄD!!!!!!!");
    }
}
function def() {
    zamknij();
    closeCart();
    CartContent();
    document.getElementById("amount").value = 0;
}
}