/*
1. Stabilisco le variabili
2. Chiedo quanti km vuole percorrere all'utente
3. Chiedo l'età all'utente
4. Applico lo sconto in base all'età
5. Mando a schermo il costo del biglietto con massimo due decimali
*/

const kmTrip = parseInt(prompt ("Quanti chilometri vuoi percorrere?"));
const ageUser = parseInt(prompt ("Quanti anni hai?"));
const ticketCost = kmTrip * 0.21;
let finalPrice;

let trip= true;
let errorMsg = '';

//controllo la validità dei dati inseriti
if(kmTrip < 0){
  trip = false;
  errorMsg = 'Inserire un numero superiore a 0';
}

if(isNaN(kmTrip)){
  trip = false;
  errorMsg = 'Inserire solo numeri';
}

// controllo se l'età è valida
if(ageUser > 0 || ageUser <= 100){
  trip = false;
  errorMsg = 'Inserire un numero compreso fra 1 e 100';
}

if(isNaN(ageUser)){
  trip = false;
  errorMsg = 'Inserire solo numeri';
}

if(ageUser >= 65){
  finalPrice = ticketCost * 60 / 100;
}else if(ageUser <= 18){
  finalPrice = ticketCost * 80 / 100;
}else{
  finalPrice = ticketCost;
}

document.getElementById("output").innerHTML =
`
  Chilometri indicati: ${kmTrip} <br>
  Costo biglietto : ${kmTrip} * 0.21 (a kilometro) = ${ticketCost} <br>
  Età inserità: ${ageUser} <br>
  Prezzo biglietto finale: ${finalPrice.toFixed(2)}
`;

console.log(ticketCost);





