//----------------------------Script pour afficher l'heure avec l'api worldtime--------------------------------------//

for (let i=0; i <= produits.length-1; i++) {
    
    window.fetch("http://worldtimeapi.org/api/timezone/"+produits[i].continent+"/"+produits[i].fuseau)
    
        .then(res => res.json())
        .then(resJson => {var element = document.getElementById("zone_heure"+(i+1))
        output = resJson.datetime
        element.innerHTML = output.slice(11,16)
        
    
    })
    }