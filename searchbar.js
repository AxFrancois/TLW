//A REFAIRE EN ENTIER (TEST)

const DestinationsList = document.getElementById('Destinations');
const searchBar = document.getElementById('searchBar');
let destination = [
    {
        name: 'Voyage à Paris',
        tag: 'Paris' ,
        prix: 600,
        inPanier:0
    },

    {
        name: 'Voyage à Istanbul',
        tag: 'Istanbul' ,
        prix: 400,
        inPanier:0
    },

    {
        name: 'Voyage à Carcassonne',
        tag: 'Carcassonne' ,
        prix: 1400,
        inPanier: 0
    }
]

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredDestination = destination.filter((Emplacement) => {
        return (
            Emplacement.tag.toLowerCase().includes(searchString)
        );
    });
    displayDestinations(filteredDestination);
});

const loadDestinations = async () => {
    const destination = [
        {
            name: 'Voyage à Paris',
            tag: 'Paris' ,
            prix: 600,
            inPanier:0
        },
    
        {
            name: 'Voyage à Istanbul',
            tag: 'Istanbul' ,
            prix: 400,
            inPanier:0
        },
    
        {
            name: 'Voyage à Carcassonne',
            tag: 'Carcassonne' ,
            prix: 1400,
            inPanier: 0
        }
    ];
    displayDestinations(destination);
};

const displayDestinations = (destinations) => {
    const htmlString = destinations.map((Emplacement) => {
            return `
            <li class="Emplacement">
                <div class="ImagesDestinations">            
                <img src="Photos/${Emplacement.tag}.jpg" alt="${Emplacement.tag}" class="image" style="width:100%">
                <div class="Overlay">
                <div class="InfoDestination">${Emplacement.tag} | [Heure] | <span id="zone_meteo3"></span> </div>
                </div>
                <a class="add-panier panier3" href="#">Ajouter au panier</a>
                <a class ="reserver" href="reservation.html">Réserver</a>
                </div>
            </li>
        `;
        })
        .join('');
        DestinationsList.innerHTML = htmlString;
};


loadDestinations();