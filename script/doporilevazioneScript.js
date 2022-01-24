if(localStorage.getItem("nome")==null){
    window.location.href="./registrazione.html";
}

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