if(localStorage.getItem("nome")==null||((localStorage.getItem("casa")==null)&&(localStorage.getItem("fiume")==null)&&(localStorage.getItem("mare")==null))||((localStorage.getItem("statsUtente")==null)&&(localStorage.getItem("statsCondivise")==null))){
    window.location.href="./home.html";
}


REGcasa=localStorage.getItem("casa")
REGfiume=localStorage.getItem("fiume")
REGmare=localStorage.getItem("mare")

richiestaUtente=localStorage.getItem("statsUtente")
richiestaCondivise=localStorage.getItem("statsCondivise")


if(richiestaUtente==="false"){
    document.getElementById("heading").innerHTML="Statistiche Condivise"
}


rosso="rgba(240, 20, 12, 0.8)"
giallo="rgba(253, 215, 0, 0.8)"
verdes="rgba(66, 116, 29, 0.8)"
verdec="rgba(99, 232, 4, 0.8)"

//Mock dei dati di tutti gli utenti quando la visualizzazione è giornoxgiorno

if(richiestaUtente){
    if(REGcasa){
        datiCasaGG=[100, 40, 42, 35, 74, 88, 24]
        coloriCasaGG=[verdec, giallo, giallo, giallo, verdes, verdec, rosso]
    }else{
        datiCasaGG=[undefined, 40, 42, 35, 74, 88, 24]
        coloriCasaGG=[rosso, giallo, giallo, giallo, verdes, verdec, rosso]
    }
    
    if(REGfiume){
        datiFiumeGG=[60, 49, 75, 80, 90, 91, 26]
        coloriFiumeG=[verdes, giallo, verdec, verdec, verdec, verdec, giallo]
    }else{
        datiFiumeGG=[undefined, 49, 75, 80, 90, 91, 26]
        coloriFiumeGG=[rosso, giallo, verdec, verdec, verdec, verdec, giallo]
    }
    if(REGmare){
        datiMareGG=[20, 65, 74, 51, 28, 18, 20]
        coloriMareGG=[rosso, verdes, verdes, verdes, giallo, rosso, rosso]
    }else{
        datiMareGG=[undefined, 65, 74, 51, 28, 18, 20]
        coloriMareGG=[rosso, verdes, verdes, verdes, giallo, rosso, rosso]
    }
    datiCasaMM=[51, 68, 49, 80, 90, 82, 46, 52, 26, 49, 53, 87]
    coloriCasaMM=[verdes, verdes, giallo, verdec, verdec, verdec, giallo, verdes, giallo, giallo, verdes, verdec]

    datiFiumeMM=[49, 77, 63, 65, 96, 83, 74, 61, 40, 70, 80, 44]
    coloriFiumeMM=[giallo, verdec, verdes, verdes, verdec, verdec, verdes, verdes, giallo, verdes, verdec, giallo]

    datiMareMM=[40, 30, 70, 73, 80, 63, 24, 13, 49, 71, 83, 69]
    coloriMareMM=[giallo, giallo, verdes, verdes, verdec, verdes, rosso, rosso, giallo, verdes, verdec, verdes]
    

    datiCasaTRM=[56, 84, 41, 63]
    coloriCasaTRM=[verdes, verdec, giallo, verdes]

    datiFiumeTRM=[63, 81, 58, 65]
    coloriFiumeTRM=[verdes, verdec, verdes, verdes]

    datiMareTRM=[47, 72, 29, 74]
    coloriMareTRM=[giallo, verdes, giallo, verdes]
}else{
    datiCasaGG=[15, 35, 51, 24, 65, 90, 18]
    coloriCasaGG=[rosso, giallo, verdes, rosso, verdes, verdec, rosso]
    
    datiFiumeGG=[31, 55, 66, 77, 88, 99, 24]
    coloriFiumeGG=[giallo, verdes, verdes, verdec, verdec, verdec, rosso]
    
    datiMareGG=[76, 70, 80, 49, 35, 21, 18]
    coloriMareGG=[verdec, verdes, verdec, giallo, giallo, rosso, rosso]
    //Mock dei dati di tutti gli utenti quando la visualizzazione è xmese
    datiCasaMM=[45, 65, 55, 76, 88, 80, 49, 47, 24, 45, 52, 80]
    coloriCasaMM=[giallo, verdes, verdes, verdec, verdec, verdec, giallo, giallo, rosso, giallo, verdes, verdec]
    
    datiFiumeMM=[55, 78, 58, 60, 95, 85, 76, 58, 35, 65, 77, 47]
    coloriFiumeMM=[verdes, verdec, verdes, verdes, verdec, verdec, verdec, verdes, giallo, verdes, verdec, giallo]
    
    datiMareMM=[48, 38, 68, 76, 85, 68, 35, 18, 60, 70, 80, 65]
    coloriMareMM=[giallo, giallo, verdes, verdec, verdec, verdes, giallo, rosso, verdes, verdes, verdec, verdes]
    //Mock dei dati di tutti gli utenti quando la visualizzazione è x trimestre
    datiCasaTRM=[55, 81, 40, 45, 59]
    coloriCasaTRM=[verdes, verdec, giallo, verdes]
    
    datiFiumeTRM=[64, 80, 56, 63]
    coloriFiumeTRM=[verdes, verdec, verdes, verdes]
    
    datiMareTRM=[51, 76, 38, 72]
    coloriMareTRM=[verdes, verdec, giallo, verdes]
    
}



//Mock dati personali utente noFlag vis giornaliera


//Mock dei dati personali utente quando la visualizzazione è xmese



//istanzio array label 7 giorni precedenti
oggi= new Date()
days=[]
for(i=0;i<7;i++){
    data=new Date(oggi)
    data.setDate(oggi.getDate()-i)
    days[i]=data.getDate()+"/"+(data.getMonth()+1)
}

//istanzio array label 12 mesi all'indietro dal corrente
current=new Date();
mesi=[current.toLocaleString('default', { month: 'long' })]
for(i=1;i<12;i++){
    current.setMonth(current.getMonth()-1);
    previousMonth = current.toLocaleString('default', { month: 'long' });
    mesi[i]=previousMonth
}

//istanzio label per trimestri
trimestri=[]
for(i=0;i<4;i++){
    trimestri[i]=`${mesi[i * 3].substring(0, 3)}/${mesi[(i * 3) + 1].substring(0, 3)}/${mesi[(i * 3) + 2].substring(0, 3)}`
}


document.getElementById("giorni").style.backgroundColor="#053966"
document.getElementById("giorni").style.border="inset;"
document.getElementById("casa").style.backgroundColor="#053966"
document.getElementById("casa").style.border="inset;" 

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Qualità media delle rilevazioni',
            data: datiCasaGG,
            backgroundColor: coloriCasaGG,
            borderColor: coloriCasaGG,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});


FlagGiorni=true
FlagMesi=false
FlagTrimestri=false
FlagCasa=true
FlagFiume=false
FlagMare=false

function cambiaMesi(){
    if(FlagMare){
        myChart.data.datasets[0].data=datiMareMM;
        myChart.data.datasets[0].backgroundColor=coloriMareMM;
        myChart.data.datasets[0].borderColor=coloriMareMM;
    }
    if(FlagFiume){
        myChart.data.datasets[0].data=datiFiumeMM;
        myChart.data.datasets[0].backgroundColor=coloriFiumeMM;
        myChart.data.datasets[0].borderColor=coloriFiumeMM;
    }
    if(FlagCasa){
        myChart.data.datasets[0].data=datiCasaMM;
        myChart.data.datasets[0].backgroundColor=coloriCasaMM;
        myChart.data.datasets[0].borderColor=coloriCasaMM;
    }
    myChart.data.labels=mesi
    myChart.update();
    FlagGiorni=false
    FlagMesi=true
    FlagTrimestri=false

    document.getElementById("mesi").style.backgroundColor="#053966"
    document.getElementById("mesi").style.border="inset;" 

    document.getElementById("giorni").style.backgroundColor="#3195EB"
    document.getElementById("giorni").style.border="" 
    document.getElementById("trimestri").style.backgroundColor="#3195EB"
    document.getElementById("trimestri").style.border="" 
}
function cambiaGiorni(){
    if(FlagMare){
        myChart.data.datasets[0].data=datiMareGG;
        myChart.data.datasets[0].backgroundColor=coloriMareGG;
        myChart.data.datasets[0].borderColor=coloriMareGG;
    }
    if(FlagFiume){
        myChart.data.datasets[0].data=datiFiumeGG;
        myChart.data.datasets[0].backgroundColor=coloriFiumeGG;
        myChart.data.datasets[0].borderColor=coloriFiumeGG;
    }
    if(FlagCasa){
        myChart.data.datasets[0].data=datiCasaGG;
        myChart.data.datasets[0].backgroundColor=coloriCasaGG;
        myChart.data.datasets[0].borderColor=coloriCasaGG;
    }

    myChart.data.labels=days
    myChart.update();
    FlagGiorni=true
    FlagMesi=false
    FlagTrimestri=false

    document.getElementById("giorni").style.backgroundColor="#053966"
    document.getElementById("giorni").style.border="inset;" 

    document.getElementById("mesi").style.backgroundColor="#3195EB"
    document.getElementById("mesi").style.border="" 
    document.getElementById("trimestri").style.backgroundColor="#3195EB"
    document.getElementById("trimestri").style.border="" 
}
function cambiaTrimestri(){
    if(FlagMare){
        myChart.data.datasets[0].data=datiMareTRM;
        myChart.data.datasets[0].backgroundColor=coloriMareTRM;
        myChart.data.datasets[0].borderColor=coloriMareTRM;
    }
    if(FlagFiume){
        myChart.data.datasets[0].data=datiFiumeTRM;
        myChart.data.datasets[0].backgroundColor=coloriFiumeTRM;
        myChart.data.datasets[0].borderColor=coloriFiumeTRM;
    }
    if(FlagCasa){
        myChart.data.datasets[0].data=datiCasaTRM;
        myChart.data.datasets[0].backgroundColor=coloriCasaTRM;
        myChart.data.datasets[0].borderColor=coloriCasaTRM;
    }
    myChart.data.labels=trimestri
    myChart.update();
    FlagGiorni=false
    FlagMesi=false
    FlagTrimestri=true

    document.getElementById("trimestri").style.backgroundColor="#053966"
    document.getElementById("trimestri").style.backgroundColor.border="inset;" 

    document.getElementById("mesi").style.backgroundColor="#3195EB"
    document.getElementById("mesi").style.border="" 
    document.getElementById("giorni").style.backgroundColor="#3195EB"
    document.getElementById("giorni").style.border="" 
    
}

function cambiaCasa(){
    if(FlagGiorni){
        myChart.data.datasets[0].data=datiCasaGG;
        myChart.data.datasets[0].backgroundColor=coloriCasaGG;
        myChart.data.datasets[0].borderColor=coloriCasaGG;
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiCasaMM;
        myChart.data.datasets[0].backgroundColor=coloriCasaMM;
        myChart.data.datasets[0].borderColor=coloriCasaMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiCasaTRM;
        myChart.data.datasets[0].backgroundColor=coloriCasaTRM;
        myChart.data.datasets[0].borderColor=coloriCasaTRM;
    }
    FlagCasa=true
    FlagFiume=false
    FlagMare=false
    myChart.update();

    document.getElementById("casa").style.backgroundColor="#053966"
    document.getElementById("casa").style.border="inset;" 

    document.getElementById("fiume").style.backgroundColor="#3195EB"
    document.getElementById("fiume").style.border="" 
    document.getElementById("mare").style.backgroundColor="#3195EB"
    document.getElementById("mare").style.border="" 
}
function cambiaFiume(){
    if(FlagGiorni){
        myChart.data.datasets[0].data=datiFiumeGG;
        myChart.data.datasets[0].backgroundColor=coloriFiumeGG;
        myChart.data.datasets[0].borderColor=coloriFiumeGG;
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiFiumeMM;
        myChart.data.datasets[0].backgroundColor=coloriFiumeMM;
        myChart.data.datasets[0].borderColor=coloriFiumeMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiFiumeTRM;
        myChart.data.datasets[0].backgroundColor=coloriFiumeTRM;
        myChart.data.datasets[0].borderColor=coloriFiumeTRM;
    }
    FlagCasa=false
    FlagFiume=true
    FlagMare=false
    myChart.update();

    document.getElementById("fiume").style.backgroundColor="#053966"
    document.getElementById("fiume").style.border="inset;" 

    document.getElementById("casa").style.backgroundColor="#3195EB"
    document.getElementById("casa").style.border="" 
    document.getElementById("mare").style.backgroundColor="#3195EB"
    document.getElementById("mare").style.border="" 
}
function cambiaMare(){
    if(FlagGiorni){
        myChart.data.datasets[0].data=datiMareGG;
        myChart.data.datasets[0].backgroundColor=coloriMareGG;
        myChart.data.datasets[0].borderColor=coloriMareGG;
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiMareMM;
        myChart.data.datasets[0].backgroundColor=coloriMareMM;
        myChart.data.datasets[0].borderColor=coloriMareMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiMareTRM;
        myChart.data.datasets[0].backgroundColor=coloriMareTRM;
        myChart.data.datasets[0].borderColor=coloriMareTRM;
    }
    FlagCasa=false
    FlagFiume=false
    FlagMare=true
    myChart.update();

    document.getElementById("mare").style.backgroundColor="#053966"
    document.getElementById("mare").style.border="inset;" 

    document.getElementById("fiume").style.backgroundColor="#3195EB"
    document.getElementById("fiume").style.border="" 
    document.getElementById("casa").style.backgroundColor="#3195EB"
    document.getElementById("casa").style.border="" 
}