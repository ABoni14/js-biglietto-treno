/*
1. Stabilisco le variabili
2. Chiedo quanti km vuole percorrere all'utente
3. Chiedo l'età all'utente
4. Applico lo sconto in base all'età
5. Mando a schermo il costo del biglietto con massimo due decimali
*/

const kmTrip = parseInt(prompt ("Quanti chilometri vuoi percorrere?"));
const ageUser = parseInt(prompt ("Quanti anni hai?"));
let ticketCost = kmTrip * 0.21;
const scontoOver65 = ticketCost * 60 / 100;
const scontoUnder18 = ticketCost * 80 / 100;

if(ageUser >= 65){
 console.log(scontoOver65);
}else if(ageUser <= 18){
  console.log(scontoUnder18)
}else{
  console.log("Non hai diritto a nesusno sconto");
}

document.getElementById("output").innerHTML =
`
  Chilometri indicati: ${kmTrip} <br>
  Costo biglietto : ${kmTrip} * 0.21 (a kilometro) = ${ticketCost} <br>
  Età inserità: ${ageUser} <br>
`;

console.log(ticketCost);





