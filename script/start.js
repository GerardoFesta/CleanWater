var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);


$(document).ready(function(){
    if(localStorage.getItem("nome")==null){
        window.setTimeout(function redirect(){
            window.location.href="./registrazione.html";
        },1000);
    }else{
        window.setTimeout(function redirect(){
            window.location.href="./home.html";
        },1000);
    }
})