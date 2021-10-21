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
  Prezzo biglietto finale: ${finalPrice}
`;

console.log(ticketCost);





