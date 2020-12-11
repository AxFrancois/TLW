function recap(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, 
		function( m, key, value ) { 
			vars[key] = value !== undefined ? value : '';
		}
    );

	if ( param ) {
		return vars[param] ? vars[param] : 'off';	
    }
    
}

//----------------Générateur aléatoire pour l'ID---------------//
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
     <label for ="email">Email : `+recap('email').replace("%40","@")+`</label>
     <label for ="telephone">n° Telephone : `+recap('telephone').replace("off","Non Renseigné")+`</label>
     <label for ="depart">Date de départ : `+recap('depart')+`</label>
     <label for ="retour">Date de retour : `+recap('retour')+`</label>
     <label for ="adultes">Nombre d'adultes : `+recap('adultes')+`</label>
     <label for ="enfants">Nombre d'enfants : `+recap('enfants')+`</label>
     <label for ="breakfast">Petit déjeuner : `+(recap('petit_dejeuners').replace("on","Oui")).replace("off","Non")+`</label>
     <label for ="IDReservation">IDReservation : ${getRandomInt(10000)}</label>
     </div> </fieldset>`;
     

