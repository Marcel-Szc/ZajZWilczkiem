function clickResult1() { 
    let Size = document.getElementById("FSize").value;
    document.getElementById("heroText").style.fontSize = Size + "px";
    
    let Color = document.getElementById("Color").value;
    document.getElementById("heroText").style.color = Color; 

    let Spacing = document.getElementById("Letter_Spacing").value;
    document.getElementById("heroText").style.letterSpacing = Spacing + "px"; 

    let Style = document.getElementById("Style").value;
    document.getElementById("heroText").style.fontStyle = Style; 

    console.log("działa 1")
  }
  function clickResult2() {
    document.getElementById("heroText").style.fontSize = "24px";
    document.getElementById("heroText").style.color = "black";
    document.getElementById("heroText").style.letterSpacing = "1px";
    document.getElementById("heroText").style.fontStyle = "normal";

    console.log("działa 2")
  }
  function clickResult4() { 
    let BColor = document.getElementById("BColor").value;
    document.getElementById("heroText").style.borderColor = BColor;
    
    let BSize = document.getElementById("BSize").value;
    document.getElementById("heroText").style.borderWidth = BSize + "px"; 

    let BStyle = document.getElementById("BStyle").value;
    document.getElementById("heroText").style.borderStyle =  BStyle; 

    let BRadius = document.getElementById("BRadius").value;
    document.getElementById("heroText").style.borderRadius =  BRadius + "%"; 

    console.log("działa 1")
  }
  function clickResult3() {
    document.getElementById("heroText").style.borderStyle = "solid";
    document.getElementById("heroText").style.borderColor = "black";
    document.getElementById("heroText").style.borderWidth = "2px";
    document.getElementById("heroText").style.borderRadius = "0%";

    console.log("działa 2")
  }
  function clickResult6() {
    let FntSize = document.getElementById("FSize").value;
    document.getElementById("span").style.fontSize = "3px";

    let BGColor = document.getElementById("BG-Color").value;
    document.getElementById("span").style.backgroundColor = BGColor; 

    let Color = document.getElementById("Color").value;
    document.getElementById("span").style.color = Color; 

    let BSize = document.getElementById("BorderSize").value;
    document.getElementById("span").style.borderWidth = BSize + "px"; 

    let BColor = document.getElementById("BorderColor").value;
    document.getElementById("span").style.borderColor = BColor;

    let BStyle = document.getElementById("BorderStyle").value;
    document.getElementById("span").style.borderStyle =  BStyle;
    
    console.log("działa 3")
  }