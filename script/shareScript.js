$(document).on('click', '#fb', function() {
    Swal.fire({
        width: 466,
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#tele', function() {
    Swal.fire({
        width: 466,
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#twt', function() {
    Swal.fire({
        width: 466,
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});

$(document).on('click', '#env', function() {
    Swal.fire({
        width: 466,
        title: 'Condivisione andata a buon fine!',
        text:"Grazie per il tuo supporto",
        showConfirmButton: true,
        icon:"confirm"
    })
});



$("#share").click(function(){
    Swal.fire({
        width: 466,
        position: 'center',
        grow: 'row',
        title: 'Condividi la tua ultima rilevazione',
        html:""+
        '<span title="Facebook"><a href="#" class="fa fa-facebook" id="fb" alt="Facebook"></a></span>'+
        '<span title="Twitter"><a href="#" class="fa fa-twitter" id="twt" alt="Twitter"></a></span>'+
        '<span title="Email"><a href="#" class="fa fa-envelope" id="env" alt="Email"></a></span>'+
        '<span title="Telegram"><a href="#" class="fa fa-telegram" id="tele" alt="Telegram"></a></span>'+"<br><br>",
        showCancelButton: false,
        showConfirmButton: false,
    })
    
})
