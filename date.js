for (let i=0; i <= produits.length-1; i++) {
    
    window.fetch("http://worldtimeapi.org/api/timezone/"+produits[i].tag1+"/"+produits[i].tag2)
    
        .then(res => res.json())
        .then(resJson => {var element = document.getElementById("zone_meteo"+(i+1))
        element.innerHTML = resJson.main.temp + "°C"
        
    
    })
    }