
//placeholder per i Flag
REGcasa=true;
REGfiume=false;
REGmare=false;

//PER ERASMO:
//CREARE VARIABILI STRINGHE ES:"VERDE""GIALLO" ECC ASSEGNANDO L'RGBA RELATIVO AI COLORI COME STRINGA (LI PRENDI DA INTERNET)
//MODIFICARE I VETTORI CHE CI SONO GIA' METTENDO DEI VALORI ALL'INTERNO
//AGGIUNGERE DEI VETTORI DI TESTO, INSERENDO ALL'INTERNO LE VARIABILI CREATE IN CORRISPONDENZA DEI VALORI DEI VETTORI SOPRA




//Mock dei dati di tutti gli utenti quando la visualizzazione è giornoxgiorno
datiCasaGG=[12, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 
datiFiumeGG=[31, 55, 66, 77, 88, 88, 99]
//aggiungere vettore stringa colori 
datiMareGG=[12, 13, 34, 42, 11, 21, 100]
//aggiungere vettore stringa colori 

//Mock dei dati di tutti gli utenti quando la visualizzazione è xmese
datiCasaMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 
datiFiumeMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 
datiMareMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 

//Mock dei dati di tutti gli utenti quando la visualizzazione è x trimestre
datiCasaTRM=[45,45,45,45]
//aggiungere vettore stringa colori 
datiFiumeTRM=[9,9,9,9]
//aggiungere vettore stringa colori 
datiMareTRM=[69,69,69,69]
//aggiungere vettore stringa colori 

//Mock dati personali utente siFlag vis giornaliera
datiPersCasaGGFLAG=[12, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 
datiPersFiumeGGFLAG=[12, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 
datiPersMareGGFLAG=[12, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 

//Mock dati personali utente noFlag vis giornaliera
datiPersCasaGG=[undefined, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 
datiPersFiumeGG=[undefined, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 
datiPersmareGG=[undefined, 13, 34, 42, 11, 21, 11]
//aggiungere vettore stringa colori 

//Mock dei dati personali utente quando la visualizzazione è xmese
datiPersCasaMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 
datiPersFiumeMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 
datiPersMareMM=[12, 13, 34, 42, 11, 21, 11, 33, 44, 66, 77, 88]
//aggiungere vettore stringa colori 
//Mock dei dati personali utente quando la visualizzazione è x trimestre
datiPersCasaTRM=[12, 13, 34, 42]
//aggiungere vettore stringa colori 
datiPersFiumeTRM=[12, 13, 34, 42]
//aggiungere vettore stringa colori 
datiPersMareTRM=[12, 13, 34, 42]
//aggiungere vettore stringa colori 

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