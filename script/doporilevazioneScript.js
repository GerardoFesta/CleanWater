if(localStorage.getItem("nome")==null){
    window.location.href="./registrazione.html";
}

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