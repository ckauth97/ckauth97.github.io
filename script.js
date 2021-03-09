window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){
        document.getElementById("header").style.fontSize = "50px";
        document.getElementById("header").style.backgroundColor = "var(--black)";
    } else if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) { 
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.fontSize = "100px";
    } else {
    document.getElementById("header").style.fontSize = "100px";
    document.getElementById("header").style.position = "relative";
    document.getElementById("header").style.backgroundColor = "transparent";
  }
} 