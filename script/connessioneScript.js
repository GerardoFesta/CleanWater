

var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);


function connetti(){
    $(".overlay").show();
    $(".loader").show();
    document.getElementById("next").style.display = "none";
    window.setTimeout(function redirect(){
        document.getElementById("loader").style.display = "none";
        document.getElementById("overlay").style.display = "none";

        Swal.fire({
            title: 'Connessione riuscita!',
            text: 'Benvenuto in CleanWater',
            icon: 'success',
            confirmButtonText: 'Avanti',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href="./home.html"
            }
        })
    }, 2000)
}


    
    
