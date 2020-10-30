let paniers = document.querySelectorAll('.add-panier');

for (let i=0; i < paniers.length; i++) {
    paniers[i].addEventListener('click', () => {
        panierNumbers(produits[i]);
        coutTotal(produits[i]);
    })
}

function rechargementArticleNumbers() {
    let nombreProduits = localStorage.getItem('panierNumbers');

    if(nombreProduits) {
        document.querySelector('.Panier span').textContent = nombreProduits;
    }
}

function panierNumbers(produits) {
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

function setItems(produits) {
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
function coutTotal(produits) {
    
    let cartCost = localStorage.getItem('coutTotal');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("coutTotal", cartCost + produits.prix)
    } else{
        localStorage.setItem("coutTotal" ,produits.prix);
    }
    
}

function del(parNom){
    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    localStorage.setItem("panierNumbers", localStorage.getItem("panierNumbers") -cartItems[parNom].inPanier)
    delete cartItems[parNom]
    localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
    debugger
    let PrixTotal = 0
    for (const item in localStorage.getItem("produitsInPanier")) {
        PrixTotal = PrixTotal + item.prix * item.inPanier; //PROBLEME ICI
        console.log(PrixTotal);
    };
    localStorage.setItem("coutTotal", PrixTotal);
    location.reload();

}

function displayCart() {
    let cartItems = localStorage.getItem("produitsInPanier");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".produits");
    let cartCost = localStorage.getItem('coutTotal');
    
    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
           productContainer.innerHTML += `
           <div class ="produit">
             <ion-icon id="deleteItem${item.tag}" name="close-circle-outline" onclick="del('${item.tag}')"></ion-icon>
             <img src ="./Photos/${item.tag}.jpg"
             <span>${item.name}</span>
             </div>
             <div class ="prix">${item.prix},00€</div>
            <div class ="quantite">
            <ion-icon class = "diminuer" 
            name="chevron-back-circle-outline"></ion-icon>
            <span>${item.inPanier}</span>
            <ion-icon class = "augmenter" 
            name="chevron-forward-circle-outline"></ion-icon>
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


}
rechargementArticleNumbers();
displayCart();
/*
document.getElementById('deleteItem1').onclick = function() {
    alert("button was clicked");}
;
*/
    /*d.preventDefault();
  
    var items = JSON.parse(localStorage["items"]);
    for (var i = 0; i < items.length; i++) {
       if(items[i].itemId == 3){
         items.splice(i,1);
         break;
       }
    }
  })
*/
/*
function setDeleteButtons(){ 
    removeButtons = document.querySelectorAll(".deleteItem"); 
    var cartItems = localStorage.getItem("produitsInPanier"); 
    cartItems = JSON.parse(cartItems); 
    
    for(i=0; i < removeButtons.length; i++){ 
        
        removeButtons[i].addEventListener("click", function (e) {
        
        delete cartItems[e.currentTarget.dataset.tag];
        localStorage.setItem("produitsInPanier", JSON.stringify(cartItems));
     });
    }
}

setDeleteButtons();
*/

//------------------------------------BOUTON RETOUR-------------------------------------------------------------------//
jQuery(document).ready(function() {
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
});

