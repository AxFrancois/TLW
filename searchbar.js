//----------------------------Classe pour les destinations--------------------------------------//
class myDestinations{
    constructor(numero, name,tag,fuseau,continent,prix,inPanier){
        this.numero = numero;
        this.name = name;
        this.tag = tag;
        this.fuseau = fuseau;
        this.continent = continent;
        this.prix = prix;
        this.inPanier = inPanier
    }
}

//----------------------------Création des destionations--------------------------------------//

let product1 = new myDestinations(1,'Voyage à Paris','Paris' ,'Paris','Europe',150,0)
let product2 = new myDestinations(2,'Voyage à Istanbul','Istanbul','Istanbul','Asia',600,0)
let product3 = new myDestinations(3,'Voyage à Carcassonne','Carcassonne','Paris','Europe',350,0)
let product4 = new myDestinations(4,'Voyage à Allemagne','Allemagne','Berlin','Europe',400,0)
let product5 = new myDestinations(5,'Voyage à Australie','Australie','Sydney','Australia',1300,0)
let product6 = new myDestinations(6,'Voyage à Barcelone','Barcelone','Madrid','Europe',500,0)
let product7 = new myDestinations(7,'Voyage à Crète','Crète','Athens','Europe',800,0)
let product8 = new myDestinations(8,'Voyage à Japon','Japon','Tokyo','Asia',1300,0)
let product9 = new myDestinations(9,'Voyage à New York','New_York','New_York','America',1200,0)

const produits = [product1,product2,product3,product4,product5,product6,product7,product8,product9];

//----------------------------Barre de recherche--------------------------------------//
const DestinationsList = document.getElementById('Destinations');
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {    //détecte lorsqu'une lettre en entrée dans la barre de recherche de destination
    const searchString = e.target.value.toLowerCase();  //pour prendre en compte le lowercas/highercase

    const filteredDestination = produits.filter((Emplacement) => {  //filtre les destination contenant la même chaine de caractère
        return (
            Emplacement.tag.toLowerCase().includes(searchString)    
        );
    });
    displayBarDestinations(filteredDestination);
    
});


const displayBarDestinations = (mesproduits) => {
    listenumero = [];
    for (let k in mesproduits){
        listenumero.push(mesproduits[k].numero);
    }
    for (let i=0; i < produits.length; i++) {
        if(listenumero.includes(produits[i].numero)){
            document.getElementById(`Emplacement${produits[i].numero}`).style.display = 'block'; ;
            }
            else{
                console.log('pas dedans');
                document.getElementById(`Emplacement${produits[i].numero}`).style.display = 'none';
        }
};
 }

const loadDestinations = async () => {
    displayDestinations(produits);
    
};

const displayDestinations = (produits) => { //fonction permettant d'afficher les produits
    const htmlString = produits.map((Emplacement) => {  //Injecte ce code html pour chacune des destinations
        return `
            <li class="Emplacement" id ="Emplacement${Emplacement.numero}">
                <div  class="ImagesDestinations">            
                <img src="Photos/${Emplacement.tag}.jpg" alt="${Emplacement.tag}" class="image" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.tag.replace("_"," ")} | <span id="zone_heure${Emplacement.numero}"></span> | <span id="zone_meteo${Emplacement.numero}"></span> </div>${Emplacement.prix}€
                </div>
                // <a class="add-panier" id="panier" >Ajouter au panier</a>
                <a  id = "reserver" href="reservation.html?id=${Emplacement.index}" onclick = "clearCart()">Réserver</a>
                </div>
            </li>
        `
        })
        .join('');

        //console.log(htmlString)   //oopsi c'est un debug code ça on dirait, on va dire que c'est un easter egg


};

loadDestinations(); //display initial des destinations


//----------------------------FILTRE--------------------------------------//
function openCloseFilter(){ //pour afficher ou non les options de filtrage par curseur
    var divContenu = document.getElementById('hideContentFiltre')
         
    if(divContenu.style.display == 'block')
        divContenu.style.display = 'none';
    else
        divContenu.style.display = 'block';
}

//Recherche par curseur
var curseurMin = document.getElementById('rangeMin')
var valueMin = document.getElementById('valuePrixMin')
curseurMin.value = 0
valueMin.innerHTML = curseurMin.value

var curseurMax = document.getElementById('rangeMax')
var valueMax = document.getElementById('valuePrixMax')
curseurMax.value = 2000
valueMax.innerHTML = curseurMax.value

curseurMin.oninput = function(){    //getter de la valeur du surseur
    valueMin.innerHTML = this.value;
}

curseurMax.oninput = function(){    //getter de la valeur du surseur
    valueMax.innerHTML = this.value;
}

curseurMin.addEventListener('mousemove', function() {   //filtrage à chaque modification du curseur
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) { 
        if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
            return ( Emplacement.tag.toLowerCase()
            );}
        }
    });
    displayBarDestinations(filteredDestination);
});
curseurMax.addEventListener('mousemove', function() {
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) {
            if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
                return ( Emplacement.tag.toLowerCase()
                );}
        }
    });
    displayBarDestinations(filteredDestination);  
});

//Recherche par ordre de tri
function sortPrice(){
    if (document.getElementById('priceSelect').value == "croissant"){
        produits.sort(function(a, b){
        return a.prix - b.prix;
        });
        displayDestinations(produits)
}   else if (document.getElementById('priceSelect').value == "decroissant"){
        produits.sort(function(a, b){
        return b.prix - a.prix;
        });
        displayDestinations(produits)
}
}

//----------------------------Reservation directe (sans panier)--------------------------------------//
// Fonction de la page reservation qui nettoie le panier lors d'une reservation direct
function clearCart(){
    localStorage.removeItem('coutTotal');
    localStorage.removeItem('produitsInPanier');
    localStorage.setItem('panierNumbers', '0');
    rechargementArticleNumbers();
}


