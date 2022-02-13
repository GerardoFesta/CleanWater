if(localStorage.getItem("nome")==null){
    window.location.href="./registrazione.html";
}
if(localStorage.getItem("casa")==null&&localStorage.getItem("fiume")==null&&localStorage.getItem("mare")==null){
    $("#bottStatistiche").hide();
    $("#advice").hide();
    $("#share").hide();
    $("#shareLink").hide();
}else{
    $("#bottStatistiche").show();
    $("#advice").show();
    $("#share").show();
    $("#shareLink").show();
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
    Swal.fire({
        width: 466,
        title: 'Rilevazione in corso...',
        html: '<br><br><br><br><br><br><br><br>'+ 
        '<div class="overlay" id="overlay">'+
            '<div id="loader"></div>'+
        '</div>',
        showConfirmButton: false,
        allowOutsideClick: false
    })
   
    $(".overlay").show();
    $(".loader").show();
    document.getElementById("bottonehome").style.display = "none";
    window.setTimeout(function redirect(){
        document.getElementById("loader").style.display = "none";
        document.getElementById("overlay").style.display = "none";

        Swal.fire({
            width: 466,
            title: 'Rilevazione Completata',
            text: '',
            icon: 'success',
            confirmButtonText: 'Visualizza la tua rilevazione',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
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
            }
        })
    }, 3000)

    
})


$("#bottStatistiche").click(function(){
    Swal.fire({
        width: 466,
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



$("#ritorno").click(function(){
    $("#casahome").animate({height: "90px"});
    $("#fiumehome").animate({height: "90px"});
    $("#marehome").animate({height: "90px"});
    $("#fiumehome").show();
    $("#marehome").show();
    $("#casahome").show();
    $("#ritorno").hide();
    $("#bottonehome").hide();
})

function allcasa(){
    $("#rilevazioneHome").text("Vuoi rilevare la qualità dell'acqua di casa?")
    $("#fiumehome").hide();
    $("#marehome").hide();
    $("#casahome").animate({height: "220px"});
    $("#casahome").attr('disabled', true);
    $("#bottonehome").show();
    $("#ritorno").show();
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
    $("#ritorno").show();
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
    $("#ritorno").show();
}
/*
function restrmare(){
    $("#marehome").animate({height: "90px"});
    $("#casahome").show();
    $("#fiumehome").show();
    $("#marehome").on("click",allmare);
}
*/
