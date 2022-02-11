//primi 3 boxes
var primiboxes = $(".box").get(),current = 0;

$('.right').click(function () {
    if (current == (-primiboxes.length + 1)){
    current=0;
    updateBoxes();   
    } else {
        current--;
    updateBoxes();
    }
});

function updateBoxes() {
        for (var i = current; i < (primiboxes.length + current); i++) {
            primiboxes[i - current].style.left = (i * 100+33) + "%";
         }
}

$('.left').click(function () {
    if (current == 0){
        current=(-primiboxes.length + 1);        
        updateBoxes();
    }
    else
        {
        current++;
        updateBoxes();
        }
});

// secondi boxes
var secondiboxes = $(".secondoBox").get(),current2 = 0;
$('.right2').click(function () {
    if (current2 == (-secondiboxes.length + 1)){
        current2=0;
        updateBoxes2();   
        } 
    else {
        current2--;
        updateBoxes2();
        }
});

function updateBoxes2() {
    for (var i = current2; i < (secondiboxes.length + current2); i++) {
        secondiboxes[i - current2].style.left = (i * 100+33) + "%";
    }
}

$('.left2').click(function () {
    if (current2 == 0){
        current2=(-secondiboxes.length + 1);        
        updateBoxes2();
    }else{
    current2++;
    updateBoxes2();
    }
});

// terzi boxes

var terziboxes = $(".terzoBox").get(),current3 = 0;
$('.right3').click(function () {
    if (current3 == (-terziboxes.length + 1)){
        current3=0;
        updateBoxes3();   
        } 
    else {
        current3--;
    updateBoxes3();
    }
});

function updateBoxes3() {
    for (var i = current3; i < (terziboxes.length + current3); i++) {
        terziboxes[i - current3].style.left = (i * 100+33) + "%";
    }
}

$('.left3').click(function () {
    if (current3 == 0){
        current3=(-terziboxes.length + 1);        
        updateBoxes3();
    }else{
    current3++;
    updateBoxes3();
    }
});