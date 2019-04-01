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
    changeCSS('/css/main.css', 1);

    } else {
    changeCSS('/css/main_dark.css', 1);
    }
    save();
  }

  function save(){
    var checkbox = document.getElementById('myCheckbox');
    localStorage.setItem('myCheckbox', checkbox.checked);
    //alert('saved '+localStorage.getItem('myCheckbox'));
    document.getElementById('modePref').innerHTML = localStorage.getItem('myCheckbox');

  }
  function loadModePref(){    
    var checked = JSON.parse(localStorage.getItem('myCheckbox'));
    document.getElementById("myCheckbox").checked = checked;
    if(localStorage.getItem('myCheckbox')===true){
        
        changeCSS('/css/main.css', 1);
    }
    else{
       
        changeCSS('/css/main_dark.css', 1);
    }
}

loadModePref();