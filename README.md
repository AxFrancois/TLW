# Website-TLW

Ce site web a été fait avec Alex Pincemin en 3ème année d'école d'ingénieur à CPE Lyon
La construction du site a été divisée en 6 séances de 4 heures chacune, et complétés avec du tempsd de travail personnel.

Choses que nous n'avons pas réussi à faire : 
-lors du tri par prix, la température et l'heure ne s'affichent plus
-nous n'avons pas réussi à afficher dynamiquement les points sur le svg
-dans le récapitulatif la destination n'apparait pas
-de temps en temps jquery n'arrive pas a charger et le bouton retour en haut de page bug


Voici le cahier des charges de ce projet : 

1. Le site doit comporter au minimum les pages suivantes :
• une page principale qui présente les différentes destinations en photo
• une page de Réservation
• une page de Récapitulatif
• une page A propos & Contact
2. Le choix d’une destination sur la page principale doit amener à la page de réservation. Celle-ci reprend
l’intitulé du voyage sélectionné, et contient un formulaire de réservation. Lorsque le formulaire a été
correctement rempli, un bouton de validation conduit à la page de récapitulatif. Cette page reprend
les du voyage tels qu’ils ont été paramétrés par l’utilisateur via le formulaire, et comporte un numéro
de réservation (généré aléatoirement).
3. Le formulaire de réservation doit comporter les éléments suivants :
- nom*
- prénom*
- adresse mail*
- téléphone
- date de départ*
- date de retour*
- nombre d’adultes*
- nombre d’enfants (-12 ans)*
- une case à cocher ̈Petit-déjeuner ? ̈
- une zone de texte pour laisser une demande de renseignement
- une zone affichant le prix calculé
- un bouton de soumission et un bouton de remise à zéro
- d’autres éléments que vous jugeriez utiles
/!\ Les éléments marqués d’une * doivent obligatoirement être remplis par l’utilsateur avant soumissions
du formulaire.
4. De base, le modèle de données des séjours est très simple : chaque séjour est caractérisé par un titre
et un prix par adulte et par jour. Vous pourrez cependant enrichir librement ce modèle si vous le souhaitez
(en ajoutant le prix du vol en avion, des prestations optionnelles comme des visites guidées, etc.).
5. Le prix est calculé automatiquement en fonction de la durée du séjour, du nombre d’adultes, du
nombres d’enfants et du petit déjeuner ; un enfant paie 40% du prix d’un adulte, quel que soit le séjour
choisi. Un petit déjeuner ajoute un supplément de 12€ par personne et par jour. Evidemment, la date
de retour doit obligatoirement être postérieure à la date de départ. Les enfants ne peuvent voyager
sans être accompagnés d’un adulte. Toute modification dans le formulaire conduit à un recalcul du prix.
6. La page de contact doit comporter les éléments suivants :
• adresse (postale) de l’agence de voyage
• numéro de téléphone ; un clic sur ce numéro doit ouvrir automatiquement l’application associée à
la composition d’appels téléphoniques si l’utilisateur en dispose (par exemple Skype sur PC, ou
le téléphone sur smartphone)
• bouton d’envoi d’un mail ; l’objet du mail doit être prérempli avec « Demande de renseignements
»et le corps du message doit commencer par « Bonjour, je souhaiterais obtenir des renseignements
sur ».
7. Sur toutes les pages on doit retrouver :
• un menu de navigation
• un pied de page
• un bouton de retour au sommet de la page, qui n’apparaît que lorsque l’utilisateur fait défiler une
page trop haute pour tenir sur l’écran
8. Sur chaque photo de destination figurant sur la page principale, la température actuelle de ladite destination
doit être affichée. Pour cela, vous utiliserez l’API proposée par le site web OpenWeatherMap.
9. Filtrage : sur la page de votre site proposant les différents voyages, l’utilisateur doit disposer de filtres
(prix min / max ; disponibilité en fonction de la date ; animaux acceptés ou non ; petit déjeuner proposé,
etc.). Les destinations ne correspondant pas aux filtres doivent être automatiquement
masquées, sans clic sur un bouton de validation des filtres.
 Vous penserez à adapter votre mini base de données de voyages en conséquence.
10. Authentification : l’utilisateur doit pouvoir s’authentifier sur le site, à l’aide d’un formulaire simple
(nom d’utilisateur et mot de passe).
Comme vous ne disposez pas encore de base de données ni de serveur, vous simulerez une petite base
de données d’utilisateurs (3 ou 4 comptes suffiront) permettant d’accepter ou rejeter une connexion.
11. Panier : le site doit être doté d’un ”panier” permettant de gérer les commandes des clients (oui,
l’agence s’adresse à une clientèle plutôt fortunée qui à les moyens de réserver plusieurs séjours à la
fois...). L’utilisateur doit pouvoir modifier son panier (supprimer un voyage par exemple).
12. Le site ne doit pas être nécessairement responsive, c’est-à-dire s’adapter à la taille de l’écran sur lequel
il est consulté (en particulier sur les écrans de petite taille type smartphone). Cependant, une attention
toute particulière sera portée au respect des normes d’accessibilité.
13. En dehors des éléments précédents, qui sont imposés, l’agence de voyage vous laisse le champ libre pour
le style. Il est évident qu’une page HTML nue, sans style, serait largement insuffisante. Laissez-donc
libre cours à votre imagination, habillez votre site. Vous pouvez ajouter des effets (par exemple au
survol des destinations), mais conservez un site agréable à visiter. Nous n’attendons pas un site de
qualité professionnelle ; nous serons surtout attentifs sur la qualité et la clarté de votre code,
plus que sur l’aspect « joli »de votre site !

Créez une classe Destination, comprenant les propriétés et méthodes nécessaires pour représenter vos
différentes destinations
- Créez un tableau d’objets Destination contenant toutes les destinations que vous proposez. A partir
de maintenant, on ne doit plus voir d’informations concernant vos voyages directement dans les fichiers
HTML. Ceux-ci vont être remplis dynamiquement, via des fonctions JavaScript.
- Pour obtenir depuis la page de réservation le séjour sur lequel le client a cliqué sur la page d’accueil,
vous utiliserez la méthode présentée en cours :
• sur la page principale, pour chaque séjour, rajoutez dans l’adresse du lien vers la page de
réservation un identifiant du séjour, sous la forme id=identifiant précédé par le caractère ’ ?’.
L’identifiant doit bien sûr correspondre à l’index correspondant dans votre tableau de destinations
Exemple : <a href="templates/reservation.html?id=7">
• sur la page Réservation, vous pourrez alors récupérer l’identifiant contenu dans l’URL à l’aide
du code let sejour_id = new URLSearchParams(window.location.search).get("id")
- Mettez à jour dynamiquement votre formulaire de réservation en utilisant l’événement onchange

Créez une nouvelle page, sur laquelle vous intègrerez la carte du monde au format SVG disponible à cette
adresse (https://johnsamuel.info/fr/enseignement/cours/2020/TLI/World_map_blank_without_borders.
svg). Les pays correspondant à vos destinations proposées devront être mises en évidence lors du survol avec
la souris. Un clic sur une destination conduit à la page de réservation correspondante.
Vous intégrerez également différents éléments multimédia, comme des vidéos Youtube présentant vos
destinations.