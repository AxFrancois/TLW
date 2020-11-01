
 
let totalCost = document.getElementById("prix");
let coutVoyage = localStorage.getItem('coutTotal');
idInput = ["depart", "retour","enfants","adultes"]
for (let i=0; i <= idInput.length-1; i++) {
document.getElementById(idInput[i]).addEventListener('input', function() {
  var dateDepart = new Date(document.getElementById('depart').value);
  var dateRetour = new Date(document.getElementById('retour').value)
  var nombreAdultes = document.getElementById('adultes').value;
  var nombreEnfants = document.getElementById('enfants').value;
  var differenceDate = dateRetour-dateDepart;
  var dureeSejour = differenceDate = differenceDate/86400000;  
  if (document.getElementById('petit_dejeuners').checked == true){
  totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+12*dureeSejour*(nombreEnfants+nombreAdultes)+'€'
    } else {
      totalCost.innerHTML = dureeSejour*coutVoyage*nombreAdultes+dureeSejour*coutVoyage*0.4*nombreEnfants+'€'
 }
  
});}




function recap(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, 
		function( m, key, value ) { 
			vars[key] = value !== undefined ? value : '';
		}
    );

	if ( param ) {
		return vars[param] ? vars[param] : null;	
    }
    
}

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
if (recap('petit_dejeuner') == 'on'){

   petitDejeuner = "Option : Petit déjeuner" ;
    } else {
   petitDejeuner = "Option : Aucune option choisie" ;
}

let listeInfoUser = document.querySelector("#infosUserReservation");
     listeInfoUser.innerHTML += `
    <fieldset class ="recap"><legend class="recapTitle">Récapitulatif</legend>
     <div class ="recapInfosUser">
     <label for ="nom"> Nom : `+recap('nom')+`</label>
     <label for ="prenom">Prenom : `+recap('prenom')+`</label>
     <label for ="email">Email : `+recap('email')+`</label>
     <label for ="telephone">n° Telephone : `+recap('telephone')+`</label>
     <label for ="depart">Date de départ : `+recap('depart')+`</label>
     <label for ="retour">Date de retour : `+recap('retour')+`</label>
     <label for ="adultes">Nombre d'adultes : `+recap('adultes')+`</label>
     <label for ="enfants">Nombre d'enfants : `+recap('enfants')+`</label>
     <label for ="breakfast">${petitDejeuner}</label>
     </div> </fieldset>`;
     

