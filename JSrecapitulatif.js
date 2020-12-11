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

let cartItems = localStorage.getItem("produitsInPanier");
cartItems = JSON.parse(cartItems);
let listeInfoVoyage = document.querySelector("#infosVoyageReserver");
if(cartItems && listeInfoVoyage) {
  Object.values(cartItems).map(item => {
<<<<<<< HEAD
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
=======
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

>>>>>>> ed2147c311885dbffb07b4cb4f9b72199f5f8d3a
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
     <label for ="telephone">n° Telephone : `+recap('telephone')+`</label>
     <label for ="depart">Date de départ : `+recap('depart')+`</label>
     <label for ="retour">Date de retour : `+recap('retour')+`</label>
     <label for ="adultes">Nombre d'adultes : `+recap('adultes')+`</label>
     <label for ="enfants">Nombre d'enfants : `+recap('enfants')+`</label>
     <label for ="breakfast">Petit déjeuner : `+(recap('petit_dejeuners').replace("on","Oui")).replace("off","Non")+`</label>
     <label for ="IDReservation">IDReservation : ${getRandomInt(10000)}</label>
     </div> </fieldset>`;
     

