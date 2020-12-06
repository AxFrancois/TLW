let produits = [
    {
        index :1,
        name: 'Voyage à Paris',
        tag: 'Paris' ,
        fuseau : 'Paris',
        continent : 'Europe',
        prix: 150,
        inPanier:0
    },

    {
        index :2,
        name: 'Voyage à Istanbul',
        tag: 'Istanbul' ,
        fuseau :'Istanbul',
        continent : 'Asia',
        prix: 600,
        inPanier:0
    },

    {
        index :3,
        name: 'Voyage à Carcassonne',
        tag: 'Carcassonne' ,
        fuseau : 'Paris',
        continent : 'Europe',
        prix: 350,
        inPanier: 0
    },
    {
        index :4,
        name: 'Voyage en Allemagne',
        tag: 'Allemagne' ,
        fuseau : 'Berlin',
        continent : 'Europe',
        prix: 400,
        inPanier:0
    },

    {
        index :5,
        name: 'Voyage en Australie',
        tag: 'Australie' ,
        fuseau : 'Sydney',
        continent : 'Australia',
        prix: 1300,
        inPanier:0
    },

    {
        index :6,
        name: 'Voyage à Barcelone',
        tag: 'Barcelone' ,
        fuseau : 'Madrid',
        continent : 'Europe',
        prix: 500,
        inPanier: 0
    },

    {
        index :7,
        name: 'Voyage en Crète',
        tag: 'Crète' ,
        fuseau : 'Athens',
        continent : 'Europe',
        prix: 800,
        inPanier:0
    },

    {
        index :8,
        name: 'Voyage au Japon',
        tag: 'Japon' ,
        fuseau : 'Tokyo',
        continent : 'Asia',
        prix: 200,
        inPanier:0
    },

    {
        index :9,
        name: 'Voyage à New York',
        tag: 'New_York' ,
        fuseau : 'New_York',
        continent : 'America',
        prix: 1020,
        inPanier: 0
    }
];

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
                <a  id = "reserver" href="reservation.html?id=${Emplacement.index}">Réserver</a>
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

