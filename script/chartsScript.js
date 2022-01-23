
//placeholder per i Flag
REGcasa=true;
REGfiume=false;
REGmare=false;

//PER ERASMO:
//CREARE VARIABILI STRINGHE ES:"VERDE""GIALLO" ECC ASSEGNANDO L'RGBA RELATIVO AI COLORI COME STRINGA (LI PRENDI DA INTERNET)
//MODIFICARE I VETTORI CHE CI SONO GIA' METTENDO DEI VALORI ALL'INTERNO
//AGGIUNGERE DEI VETTORI DI TESTO, INSERENDO ALL'INTERNO LE VARIABILI CREATE IN CORRISPONDENZA DEI VALORI DEI VETTORI SOPRA


rosso="rgba(240, 20, 12, 0.8)"
giallo="rgba(253, 215, 0, 0.8)"
verdes="rgba(66, 116, 29, 0.8)"
verdec="rgba(99, 232, 4, 0.8)"

//Mock dei dati di tutti gli utenti quando la visualizzazione è giornoxgiorno
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

//Mock dati personali utente siFlag vis giornaliera
datiPersCasaGGFLAG=[10, 40, 42, 35, 74, 88, 24]
coloriPersCasaGGFLAG=[rosso, giallo, giallo, giallo, verdes, verdec, rosso]

datiPersFiumeGGFLAG=[24, 49, 75, 80, 90, 91, 26]
coloriPersFiumeGGFLAG=[rosso, giallo, verdec, verdec, verdec, verdec, giallo]

datiPersMareGGFLAG=[73, 65, 74, 51, 28, 18, 20]
coloriPersMareGGFLAG=[verdes, verdes, verdes, verdes, giallo, rosso, rosso]
//Mock dati personali utente noFlag vis giornaliera
datiPersCasaGG=[undefined, 40, 42, 35, 74, 88, 24]
coloriPersCasaGG=[rosso, giallo, giallo, giallo, verdes, verdec, rosso]

datiPersFiumeGG=[undefined, 49, 75, 80, 90, 91, 26]
coloriPersFiumeGG=[rosso, giallo, verdec, verdec, verdec, verdec, giallo]

datiPersMareGG=[undefined, 65, 74, 51, 28, 18, 20]
coloriPersMareGG=[rosso, verdes, verdes, verdes, giallo, rosso, rosso]
//Mock dei dati personali utente quando la visualizzazione è xmese

datiPersCasaMM=[51, 68, 49, 80, 90, 82, 46, 52, 26, 49, 53, 87]
coloriPersCasaMM=[verdes, verdes, giallo, verdec, verdec, verdec, giallo, verdes, giallo, giallo, verdes, verdec]

datiPersFiumeMM=[49, 77, 63, 65, 96, 83, 74, 61, 40, 70, 80, 44]
coloriPersFiumeMM=[giallo, verdec, verdes, verdes, verdec, verdec, verdes, verdes, giallo, verdes, verdec, giallo]

datiPersMareMM=[40, 30, 70, 73, 80, 63, 24, 13, 49, 71, 83, 69]
coloriPersMareMM=[giallo, giallo, verdes, verdes, verdec, verdes, rosso, rosso, giallo, verdes, verdec, verdes]
//Mock dei dati personali utente quando la visualizzazione è x trimestre

datiPersCasaTRM=[56, 84, 41, 63]
coloriPersCasaTRM=[verdes, verdec, giallo, verdes]

datiPersFiumeTRM=[63, 81, 58, 65]
coloriPersFiumeTRM=[verdes, verdec, verdes, verdes]

datiPersMareTRM=[47, 72, 29, 74]
coloriPersMareTRM=[giallo, verdes, giallo, verdes]

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

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            label: 'Qualità media delle rilevazioni',
            data: [12, 13, 34, 42, 11, 21, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
    if(FlagMare)
        myChart.data.datasets[0].data=datiMareMM;
    if(FlagFiume)
        myChart.data.datasets[0].data=datiFiumeMM;
    if(FlagCasa)
        myChart.data.datasets[0].data=datiCasaMM;
    
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
    if(FlagMare)
        myChart.data.datasets[0].data=datiMareGG;
    if(FlagFiume)
        myChart.data.datasets[0].data=datiFiumeGG;
    if(FlagCasa)
        myChart.data.datasets[0].data=datiCasaGG;

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
    if(FlagMare)
        myChart.data.datasets[0].data=datiMareTRM;
    if(FlagFiume)
        myChart.data.datasets[0].data=datiFiumeTRM;
    if(FlagCasa)
        myChart.data.datasets[0].data=datiCasaTRM;

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
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiCasaMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiCasaTRM;
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
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiFiumeMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiFiumeTRM;
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
    }
    if(FlagMesi){
        myChart.data.datasets[0].data=datiMareMM;
    }
    if(FlagTrimestri){
        myChart.data.datasets[0].data=datiMareTRM;
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