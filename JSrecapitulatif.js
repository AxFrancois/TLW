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

function displayInfos(){
    nom = recap('nom');
    prenom = recap('prenom');
    email = recap('email');
    telephone = recap('telephone');
    dateDepart = recap('depart');
    dateRetour = recap('return');
    nombreAdultes = recap('adultes');
    nombreEnfants = recap('enfants');
    
  }
displayInfos();
//  if (document.getElementById(petit_dejeuners).checked == true){

//       petitDejeuner = "Option : Petit déjeuner"
//         } ;
console.log(nombreEnfants);
document.getElementById('listeInfosUser').innerHTML = 'nombreEnfants' ;

