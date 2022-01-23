if(localStorage.getItem("nome")!=null){
    window.location.href="./home.html";
}


var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

function controllodati(){
    if(controlloinput()){
        localStorage.setItem("nome",document.getElementById("nome").value);
        window.location.href="./sceltaConfigurazione.html";
    }
    
}

function controlloinput(){
    $("#spancheck").css("display", "none")
    $("#spanome").css("display", "none")
    $("#spancognome").css("display", "none")
    $("#spanmail").css("display", "none")
    $("#spanage").css("display", "none")

    $("#trattamento").focus(function(){
        $("#spancheck").css("display", "inline")
     });
     $("#nome").focus(function(){
        $("#spanome").css("display", "inline")
     });
     $("#cognome").focus(function(){
        $("#spancognome").css("display", "inline")
     });
     $("#email").focus(function(){
        $("#spanmail").css("display", "inline")
     });
     $("#age").focus(function(){
        $("#spanage").css("display", "inline")
     });
    cb = document.querySelector("#trattamento");
    spancb=document.querySelector("#spancheck").onFocus
    flag=true
    retflag=true
    if(!cb.checked){

        $("#trattamento").focus();
        flag=false
        retflag=false
    }
    if(flag){
        $("#spancheck").css("display", "none")
        $('#trattamento').off('focus');
    } 
    flag=true

    if(document.getElementById("nome").value.length==0){
        $("#nome").focus();
        flag=false;
        retflag=false
    }
    if(flag){
        $("#spanome").css("display", "none")
        $('#nome').off('focus');
    }
    flag=true

    if(document.querySelector("#cognome").value===""){
        $("#cognome").focus();
        flag=false;
        retflag=false
    }
    if(flag){
        $("#spancognome").css("display", "none")
        $('#cognome').off('focus');
    }
    flag=true

    mail=document.querySelector("#email").value
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))||mail.length>64||mail.length<=0){
        $("#email").focus();
        flag=false;
        retflag=false
    }
    if(flag){
        $("#spanmail").css("display", "none")
        $('#email').off('focus');
    }
        flag=true

    if(document.querySelector("#age").value===""||document.querySelector("#age").value<16){
        $("#age").focus();
        flag=false;
        retflag=false
    }
    if(flag){
        $("#spanage").css("display", "none")
        $('#age').off('focus');
    
    }

    return retflag;
}