//----------------------------Ajout d'élements au panier (dans Index.html-----------------------------------//
let paniers = document.querySelectorAll('.add-panier');

for (let i=0; i < paniers.length; i++) {
    paniers[i].addEventListener('click', () => {
        panierNumbers(produits[i]);
        coutTotal(produits[i]);
    })
}

function rechargementArticleNumbers() { //fonction qui permet de recalculer le nombre de produit dans le panier à arrivée sur la page (nécéssaire à cause d'un bug avec le SVG)
    let nombreProduits = localStorage.getItem('panierNumbers');

    if(nombreProduits) {
        document.querySelector('.Panier span').textContent = nombreProduits;
    }
}

function panierNumbers(produits) {  //fonction qui permet de recalculer le nombre de produit dans le panier à chaque modification
    let nombreProduits = localStorage.getItem('panierNumbers');
    nombreProduits = parseInt(nombreProduits)
    
    if(nombreProduits) {
        localStorage.setItem('panierNumbers' , nombreProduits + 1);
        document.querySelector(' .Panier span').textContent = nombreProduits + 1;
    } else {
        localStorage.setItem('panierNumbers' , 1);
        document.querySelector(' .Panier span').textContent =1;
    }
    
    setItems(produits);
}

function setItems(produits) {   //fonction qui permet d'enregistrer le panier dans le local storage
    let cartItems = localStorage.getItem('produitsInPanier');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems !== null) {
        if(cartItems[produits.tag] == undefined) {
            cartItems ={
                ...cartItems,
                [produits.tag] : produits
            }
        }
        cartItems[produits.tag].inPanier +=1;
    }  else{
       produits.inPanier = 1 ;
       cartItems ={
            [produits.tag] : produits
       }
    }
    
    localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
}

function coutTotal(produits) {  //fonction calcule le cout total des produits sélectionnées
let cartItems = localStorage.getItem('produitsInPanier');
    
    let cartCost = localStorage.getItem('coutTotal');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("coutTotal", cartCost + produits.prix)
    } else{
        localStorage.setItem("coutTotal" ,produits.prix);
    }
    
}

//---------------------------Fonctions de la page Panier.html-------------------------------------//

function del(parNom){   //fonction qui permet de supprimer un élément du panier d'un clic sur la croix
    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    localStorage.setItem("panierNumbers", localStorage.getItem("panierNumbers") -cartItems[parNom].inPanier)
    delete cartItems[parNom]
    localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
    let PrixTotal = 0
    for (let item in cartItems) {
        PrixTotal = PrixTotal + cartItems[item].prix * cartItems[item].inPanier; 
    };
    localStorage.setItem("coutTotal", PrixTotal);

    if (localStorage.getItem("panierNumbers")==0) {
        var myItem = localStorage.getItem('coupleID');
        localStorage.clear();
        localStorage.setItem('coupleID',myItem)
    }
    location.reload();
}

function Ajouter(parNom){   //fonction qui permet d'ajouter un voyage en cliquant sur la flèche ">"
    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    debugger
    localStorage.setItem("panierNumbers", parseInt(localStorage.getItem("panierNumbers"),10) + 1 )
    cartItems[parNom].inPanier = cartItems[parNom].inPanier + 1
    localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
    let PrixTotal = 0
    for (let item in cartItems) {
        PrixTotal = PrixTotal + cartItems[item].prix * cartItems[item].inPanier; 
    };
    localStorage.setItem("coutTotal", PrixTotal);
    location.reload();
}


function Enlever(parNom){   //fonction qui permet de retirer un voyage en cliquant sur la flèche "<"

    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    if (cartItems[parNom].inPanier == 1) {
        del(parNom)}
    else {
        localStorage.setItem("panierNumbers", parseInt(localStorage.getItem("panierNumbers"),10) -1 )
        cartItems[parNom].inPanier = cartItems[parNom].inPanier - 1
        localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
        let PrixTotal = 0
        for (let item in cartItems) {
            PrixTotal = PrixTotal + cartItems[item].prix * cartItems[item].inPanier; 
        };
        localStorage.setItem("coutTotal", PrixTotal);
        location.reload();
    }
}


function displayCart() {    //fonction qui permet d'afficher les éléments du panier
    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".produits");
    let cartCost = localStorage.getItem('coutTotal');
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = ` `;
        Object.values(cartItems).map(item => {
           productContainer.innerHTML += `
           <div class ="produit">
                <ion-icon id="deleteItem${item.tag}" name="close-circle-outline" onclick="del('${item.tag}')"></ion-icon>
                <img src ="./Photos/${item.tag}.jpg">
                <span class="produitTexte">${item.name}</span>
            </div>
            <div class ="prix">${item.prix},00€</div>
            <div class ="quantite">
                <ion-icon class = "diminuer" 
                name="chevron-back-circle-outline" onclick="Enlever('${item.tag}')"></ion-icon>
                <span>${item.inPanier}</span>
                <ion-icon class = "augmenter" 
                name="chevron-forward-circle-outline" onclick="Ajouter('${item.tag}')"></ion-icon>
            </div>
            <div class ="total">
               ${item.inPanier*item.prix},00€
            </div>
            `
        });

        productContainer.innerHTML += `
        <div class="totalContenuPanier">
         <h4 class="panierTotalTitre">Total Panier</h4>
         <h4 class="panierTotal">${cartCost},00€</h4>
        </div>
        `;
    }
    else {
        productContainer.innerHTML += `
        <h2>Vous n'avez rien dans votre panier</h2>`;
    }


}

function PanierVide(){  //fonction qui permet de bloquer le bouton resserver s'il n'y a rien dans le panier
    var bt = document.getElementById('submit')
    if (localStorage.getItem("panierNumbers")==0 || localStorage.getItem("panierNumbers")==null) {
        bt.disabled = true;
    }
    else {
        bt.disabled = true;
    }
}

rechargementArticleNumbers();
displayCart();
PanierVide();
