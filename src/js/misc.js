function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

function switchMode() {
    if(document.getElementById("myCheckbox").checked === true){
    changeCSS('/css/main_dark.css', 0);

    } else {
    changeCSS('/css/main.css', 0);
    }
  }