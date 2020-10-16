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
var recap = recap(),
    nom = recap['nom'],
    prenom = recap['prenom'],
    email = recap['email'],
    telephone = recap['telephone'],
    nom = recap['nom'],
    nom = recap['nom'],
    nom = recap['nom'],
    nom = recap['nom'],

     
