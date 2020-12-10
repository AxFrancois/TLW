
class myDestinations{
    constructor(index, name,tag,fuseau,continent,prix,inPanier){
        this.index = index;
        this.name = name;
        this.tag = tag;
        this.fuseau = fuseau;
        this.continent = continent;
        this.prix = prix;
        this.inPanier = inPanier
    }
}

let product1 = new myDestinations(1,'Voyage à Paris','Paris' ,'Paris','Europe',150,0)
let product2 = new myDestinations(2,'Voyage à Istanbul','Istanbul','Istanbul','Asia',600,0)
let product3 = new myDestinations(3,'Voyage à Carcassonne','Carcassonne','Carcasonne','Europe',350,0)
let product4 = new myDestinations(4,'Voyage à Allemagne','Allemagne','Berlin','Europe',400,0)
let product5 = new myDestinations(5,'Voyage à Australie','Australie','Sydney','Australia',1300,0)
let product6 = new myDestinations(6,'Voyage à Barcelone','Barcelone','Madrid','Europe',500,0)
let product7 = new myDestinations(7,'Voyage à Crète','Crète','Athens','Europe',800,0)
let product8 = new myDestinations(8,'Voyage à Japon','Japon','Tokyo','Asia',1300,0)
let product9 = new myDestinations(9,'Voyage à New York','New_York','New_York','America',1200,0)
let produits = [product1,product2,product3,product4,product5,product6,product7,product8,product9];
const DestinationsList = document.getElementById('Destinations');

//----------------------------Barre de recherche--------------------------------------//

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDestination = produits.filter((Emplacement) => {
        return (
            Emplacement.tag.toLowerCase().includes(searchString)    
        );
    });
    displayDestinations(filteredDestination);
});

const loadDestinations = async () => {
    displayDestinations(produits);
    
};

const displayDestinations = (produits) => {
    const htmlString = produits.map((Emplacement) => {
        return `
            <li class="Emplacement">
                <div class="ImagesDestinations">            
                <img src="Photos/${Emplacement.tag}.jpg" alt="${Emplacement.tag}" class="image" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.tag.replace("_"," ")} | <span id="zone_heure${Emplacement.index}"></span> | <span id="zone_meteo${Emplacement.index}"></span> </div>${Emplacement.prix}€
                </div>
                <a class="add-panier" id="panier" href="#">Ajouter au panier</a>
                <a  id = "reserver" href="reservation.html?id=${Emplacement.index}" onclick = "clearCart()">Réserver</a>
                </div>
            </li>
        `;
        })
        .join('');
        //console.log(htmlString)
        DestinationsList.innerHTML = htmlString;

};

loadDestinations();


//----------------------------FILTRE--------------------------------------//
function openCloseFilter(){
    var divContenu = document.getElementById('hideContentFiltre')
         
    if(divContenu.style.display == 'block')
        divContenu.style.display = 'none';
    else
        divContenu.style.display = 'block';
}

var curseurMin = document.getElementById('rangeMin')
var valueMin = document.getElementById('valuePrixMin')
curseurMin.value = 0
valueMin.innerHTML = curseurMin.value

var curseurMax = document.getElementById('rangeMax')
var valueMax = document.getElementById('valuePrixMax')
curseurMax.value = 2000
valueMax.innerHTML = curseurMax.value

curseurMin.oninput = function(){
    valueMin.innerHTML = this.value;
}

curseurMax.oninput = function(){
    valueMax.innerHTML = this.value;
}

curseurMin.addEventListener('mousemove', function() {
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) { 
        if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
            return ( Emplacement.tag.toLowerCase()
            );}
        }
    });
    displayDestinations(filteredDestination);
});
curseurMax.addEventListener('mousemove', function() {
    
    const filteredDestination = produits.filter((Emplacement) => {
        for (let i=0; i < produits.length; i++) {
            if(Emplacement.prix > curseurMin.value && Emplacement.prix < curseurMax.value){
                return ( Emplacement.tag.toLowerCase()
                );}
        }
    });
    displayDestinations(filteredDestination);  
});

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
// Fonction de la page reservation qui nettoie le panier lors d'une reservation direct
function clearCart(){
    localStorage.removeItem('produitsInPanier');
    localStorage.setItem('panierNumbers', '0');
    rechargementArticleNumbers();
}


