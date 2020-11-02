let totalCost = document.getElementById("prix");
let coutVoyage = localStorage.getItem('coutTotal');
idInput = ["depart", "retour","enfants","adultes","petit_dejeuners"]
for (let i=0; i <= idInput.length-1; i++) {
document.getElementById(idInput[i]).addEventListener('input', function() {
  var dateDepart = new Date(document.getElementById('depart').value);
  var dateRetour = new Date(document.getElementById('retour').value)
  var nombreAdultes =parseInt(document.getElementById('adultes').value);
  var nombreEnfants = parseInt(document.getElementById('enfants').value);
  var valuePetitDejeuner = document.getElementById('petit_dejeuners').checked;
  var differenceDate = dateRetour-dateDepart;
  var dureeSejour = differenceDate = differenceDate/86400000;  
  function verifForm(){
    if(dateDepart > dateRetour){
      alert(`La date de retour doit être posterieur à la date de départ`);
           }
    }
    if (parseInt(document.getElementById('adultes').value) == 0 && parseInt(document.getElementById('enfants').value) > 0){
      alert(`Les enfants doivent etre accompagné d'un adulte`);
    }
  verifForm();
  if (valuePetitDejeuner == true){
  totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+12*dureeSejour*(nombreEnfants+nombreAdultes)+'€'
  } else {
      totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+'€'
 }
  
});}

let cartItems = localStorage.getItem("produitsInPanier");
cartItems = JSON.parse(cartItems);
let listeInfoVoyage = document.querySelector("#infosVoyageReserver");
if(cartItems && listeInfoVoyage) {
  Object.values(cartItems).map(item => {
     listeInfoVoyage.innerHTML += `
     
     <div class ="produitReservation">
       <img src ="./Photos/${item.tag}.jpg">
       </div>
      <div class ="prixVoyage">${item.prix},00€</div>
      <div class ="nomVoyage">
      <span>Vous avez réservé ${item.inPanier} ${item.name}</span>
      </div>
      `
  });
}