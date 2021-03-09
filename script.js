window.onscroll = function () { scrollFunction() };

function scrollFunction() {

    console.log("Calc: " + (document.documentElement.clientHeight - 180)) //180
    console.log("Top: " + document.documentElement.scrollTop)

    if (
        document.body.scrollTop >= 400 ||
        document.documentElement.scrollTop >= 400) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0";
        document.getElementById("header").style.backgroundColor = "transparent";
        // document.getElementById("header").style.fontSize = "100px";
        document.getElementById("header").style.fontSize = "50px";
        document.getElementById("header").style.backgroundColor = "var(--black)";
    }

    else {
        document.getElementById("header").style.fontSize = "100px";
        document.getElementById("header").style.position = "relative";
        document.getElementById("header").style.backgroundColor = "transparent";
    }

} 