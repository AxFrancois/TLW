//----------------------------Script pour afficher la température l'api openweathermap--------------------------------------//

for (let i=0; i <= produits.length-1; i++) {

    window.fetch("https://api.openweathermap.org/data/2.5/weather?q="+produits[i].tag.replace("_"," ")+"&units=metric&lang=fr&appid=0fe9ac6e8cd825bf25243c32815ad2a8")
        .then(res => res.json())
        .then(resJson => {var element = document.getElementById("zone_meteo"+(i+1))
        element.innerHTML = resJson.main.temp + "°C"
    

})
}