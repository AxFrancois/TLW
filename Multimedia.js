//----------------------------Script pour générer dynamiquement des vidéos youtubes--------------------------------------//

const VideoList = document.getElementById('Videos');

const loadVideos = async () => {
    displayVideos(produits);
    
};

const displayVideos = (produits) => { //fonction permettant d'afficher les videos
    const htmlString = produits.map((Emplacement) => {  //Injecte ce code html pour chacune des destinations
        return `
            <li class="video" id ="Video${Emplacement.numero}">
                <div  class="TexteVideo">            
                ${Emplacement.name}
                </div>
                <iframe width="420" height="315" src="${Emplacement.video}">
                </iframe> 
            </li>
        `
        })
        .join('');
        VideoList.innerHTML = htmlString;
        //console.log(htmlString)   //oopsi c'est un debug code ça on dirait, on va dire que c'est un easter egg


};

loadVideos(); //display des videos