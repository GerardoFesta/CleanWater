if(localStorage.getItem("nome")==null){
    window.location.href="./registrazione.html";
}
if(localStorage.getItem("casa")==null&&localStorage.getItem("fiume")==null&&localStorage.getItem("mare")==null){
    $("#bottStatistiche").hide();
    $("#advice").hide();
    $("#share").hide();
}else{
    $("#bottStatistiche").show();
    $("#advice").show();
    $("#share").show();
}
var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);



document.getElementById("heading").innerHTML="<br>Benvenuto <br>"+localStorage.getItem("nome")
$("#casahome").on("click",allcasa);
$("#marehome").on("click",allmare);
$("#fiumehome").on("click",allfiume);

$("#bottonehome").click(function(){
    if($("#casahome").is(":visible")){
        localStorage.setItem("casa",true);
        window.location.href="./doporilevazioneCasa.html";
    }
    if($("#marehome").is(":visible")){
        localStorage.setItem("mare",true);
        window.location.href="./doporilevazioneMare.html";
    }
    if($("#fiumehome").is(":visible")){
        localStorage.setItem("fiume",true);
        window.location.href="./doporilevazioneFiume.html";
    }
})


$("#bottStatistiche").click(function(){
    Swal.fire({
        title: 'Quali dati vuoi visualizzare?',
        html:
        "<br>" +
        '<button id="bottoneUtente" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' + 'Le tue rilevazioni' + '</button>' +
        '<br><button id="bottoneCondivisi" type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' + 'Dati condivisi' + '</button>',
        showCancelButton: false,
        showConfirmButton: false,
        icon: 'question'
    })
    
})


$(document).on('click', '#fb', function() {
    Swal.fire({
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#tele', function() {
    Swal.fire({
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#twt', function() {
    Swal.fire({
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#env', function() {
    Swal.fire({
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});



$("#share").click(function(){
    Swal.fire({
        title: 'Condividi le tue rilevazioni',
        html:""+
        '<a class="fa fa-facebook" id="fb"></a>'+
        '<a href="#" class="fa fa-twitter" id="twt"></a>'+
        '<a href="#" class="fa fa-envelope" id="env"></a>'+
        '<a href="#" class="fa fa-telegram" id="tele"></a>'+"<br><br>",
        showCancelButton: false,
        showConfirmButton: false,
    })
    
})



$(document).on('click', '.SwalBtn1', function() {
    localStorage.setItem("statsUtente",true);
    localStorage.setItem("statsCondivise",false);
    swal.clickConfirm();
    window.location.href="./statistiche.html";
});
$(document).on('click', '.SwalBtn2', function() { 
    localStorage.setItem("statsUtente",false);
    localStorage.setItem("statsCondivise",true);
    swal.clickConfirm();
    window.location.href="./statistiche.html";
});


function allcasa(){
    $("#rilevazioneHome").text("Vuoi rilevare la qualità dell'acqua di casa?")
    $("#fiumehome").hide();
    $("#marehome").hide();
    $("#casahome").animate({height: "220px"});
    $("#casahome").attr('disabled', true);
    $("#bottonehome").show();
}
/*
function restrcasa(){
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
    $("#fiumehome").animate({height: "220px"});
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
    $("#marehome").animate({height: "220px"});
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
