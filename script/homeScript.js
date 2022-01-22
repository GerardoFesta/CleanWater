if(localStorage.getItem("nome")==null){
    window.location.href="./registrazione.html";
}

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);


document.getElementById("heading").innerHTML="<br>Benvenuto <br>"+localStorage.getItem("nome")
$("#casahome").on("click",allcasa);
$("#marehome").on("click",allmare);
$("#fiumehome").on("click",allfiume);

function allcasa(){
    $("#rilevazioneHome").text("Vuoi rilevare la qualità dell'acqua di casa?")
    $("#fiumehome").hide();
    $("#marehome").hide();
    $("#casahome").animate({height: "300px"});
    $("#casahome").attr('disabled', true);
    $("#bottonehome").show();
}
/*
function restrcasa(){
    alert("madonna")
    $("#fiumehome").show();
    $("#marehome").show();
    $("#casahome").animate({height: "90px"});
    $("#casahome").off("click");
    $("#casahome").on("click",allcasa);
}
*/
function allfiume(){
    $("#rilevazioneHome").text("Vuoi rilevare la qualità dell'acqua di un fiume?")
    $("#casahome").hide();
    $("#marehome").hide();
    $("#fiumehome").animate({height: "300px"});
    $("#fiumehome").attr('disabled', true);
    $("#bottonehome").show();
}

/*
function restrfiume(){
    $("#casahome").show();
    $("#marehome").show();
    $("#fiumehome").animate({height: "90px"});
    $("#fiumeehome").on("click",allfiume);
}
*/

function allmare(){
    $("#rilevazioneHome").text("Vuoi rilevare la qualità dell'acqua di mare?")
    $("#casahome").hide();
    $("#fiumehome").hide();
    $("#marehome").animate({height: "300px"});
    $("#marehome").attr('disabled', true);
    $("#bottonehome").show();
}
/*
function restrmare(){
    $("#marehome").animate({height: "90px"});
    $("#casahome").show();
    $("#fiumehome").show();
    $("#marehome").on("click",allmare);
}
*/
