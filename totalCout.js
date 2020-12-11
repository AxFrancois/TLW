//----------------------------Script pour la réservation--------------------------------------//
//getter de tous les éléments du formulaire de réservation
let totalCost = document.getElementById("prix");
let sejour_id = new URLSearchParams(window.location.search).get("id")

if (localStorage.getItem('coutTotal') != null){
    coutVoyage = localStorage.getItem('coutTotal');
}else{
    coutVoyage = produits[sejour_id-1].prix;
}

idInput = ["depart", "retour","enfants","adultes","petit_dejeuners"]
for (let i=0; i <= idInput.length-1; i++) {
document.getElementById(idInput[i]).addEventListener('input', function() {
   dateDepart = new Date(document.getElementById('depart').value);
   dateRetour = new Date(document.getElementById('retour').value)
   nombreAdultes =parseInt(document.getElementById('adultes').value);
   nombreEnfants = parseInt(document.getElementById('enfants').value);
   valuePetitDejeuner = document.getElementById('petit_dejeuners').checked;
   differenceDate = dateRetour-dateDepart;
   dureeSejour = differenceDate/86400000;  
  if (valuePetitDejeuner == true && dateDepart < dateRetour ){  //calculateur prix total
    totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+12*dureeSejour*(nombreEnfants+nombreAdultes)+'€'
  } else if (dateDepart < dateRetour && valuePetitDejeuner == false ){
      totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+'€'
 }
  else if (dateDepart > dateRetour || (parseInt(document.getElementById('adultes').value) == 0 && parseInt(document.getElementById('enfants').value) > 0)){
      totalCost.innerHTML = "Calcul impossible"
  }
  
});}

function verifForm(){ //fonction qui vérifie que les 2 conditions de réservations : pas d'enfant seul et date de retour postérieur à date de départ, se lance au clic de bouton valdier
  if(dateDepart > dateRetour){
    alert(`La date de retour doit être posterieur à la date de départ`);
    return false
         }
  
  else if (parseInt(document.getElementById('adultes').value) == 0 && parseInt(document.getElementById('enfants').value) > 0){
    alert(`Les enfants doivent etre accompagné d'un adulte`);
    return false
  }
  else{
    return true
}}

let listeInfoVoyage = document.querySelector("#infosVoyageReserver"); //afficheur des voyages réservés DEPUIS LA RESERVATION DIRECTE
  const displayReserveDestinations = (produits) => {
  produits.map(Emplacement => {
  listeInfoVoyage.innerHTML += `
  <div class ="produitReservation">
    <img src ="./Photos/${Emplacement.tag}.jpg">
  </div>
  <div class ="prixVoyage">${Emplacement.prix},00€</div>
  <div class ="nomVoyage">
    <span>Vous avez réservé ${Emplacement.inPanier+1} ${Emplacement.name}</span>
  </div>
  `
  });
}

const produitReserver = produits.filter((Emplacement) => {  //fonction pour faire la réservation directe (depuis la page principale ou la carte du monde)
  if (Emplacement.numero == sejour_id){
    clearCart();
    return(
      Emplacement.tag.toLowerCase()
    )};
});
displayReserveDestinations(produitReserver)


let cartItems = localStorage.getItem("produitsInPanier"); //afficheur des voyages réservés DEPUIS LE PANIER
cartItems = JSON.parse(cartItems);
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




