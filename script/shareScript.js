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
        '<a href="#" class="fa fa-facebook" id="fb"></a>'+
        '<a href="#" class="fa fa-twitter" id="twt"></a>'+
        '<a href="#" class="fa fa-envelope" id="env"></a>'+
        '<a href="#" class="fa fa-telegram" id="tele"></a>'+"<br><br>",
        showCancelButton: false,
        showConfirmButton: false,
    })
    
})
