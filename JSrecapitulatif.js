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
    return vars;
    
}

let cartItems = localStorage.getItem("produitsInPanier");
cartItems = JSON.parse(cartItems);
let listeInfoVoyage = document.querySelector("#infosVoyageReserver");
if(cartItems && listeInfoVoyage) {
  listeInfoVoyage.innerHTML = "";
  Object.values(cartItems).map(item => {
     listeInfoVoyage.innerHTML += `
     
     <div class ="produitReservation">
       <img src ="./Photos/${item.tag}.jpg">
       </div>
      <div class ="prixVoyage">${item.prix},00€</div>
      <div class ="nomVoyage">
      <span>Vous avez réserver ${item.inPanier} ${item.name}</span>
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
     listeInfoUser.innerHTML = "";
     listeInfoUser.innerHTML += `
    <fieldset class ="recap"><legend class="recapTitle">Récapitulatif</legend>
     <div class ="recapInfosUser">
     <label for ="nom"> Nom : `+recap('nom')+`</label>
     <label for ="prenom">Prenom : `+recap('prenom')+`</label>
     <label for ="email">Email : `+recap('email')+`</label>
     <label for ="telephone">n° Telephone : `+recap('telephone')+`</label>
     <label for ="depart">Date de départ : `+recap('depart')+`</label>
     <label for ="return">Date de retour : `+recap('return')+`</label>
     <label for ="adultes">Nombre d'adultes : `+recap('adultes')+`</label>
     <label for ="enfants">Nombre d'enfants : `+recap('enfants')+`</label>
     <label for ="breakfast">${petitDejeuner}</label>
     </div> </fieldset>`;
     