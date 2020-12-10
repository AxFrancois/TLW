 let disconnectButton = document.createElement('a');
 let connexionText = document.createElement('h1');

document.getElementById('connexiontitle').style.display ="none";
function inscriptionForm(){
    document.getElementById('dialog-desc').style.display ="none";
    document.getElementById('connexiontitle').style.display ='block';
    if (document.getElementById('inscription').style.display ==='none'){
        document.getElementById('inscription').style.display = 'block';
        if(document.getElementById('inscriptionReussi')){
            document.getElementById('inscriptionReussi').style.display='none';
        }
    } 
    document.getElementById('connexion').style.display ='none';
    document.getElementById('inscriptiontitle').style.display ='none';
    
}
function connexionForm(){
    if (document.getElementById('connexion').style.display ==='none'){
        document.getElementById('connexion').style.display = 'block';
    } 
    document.getElementById('dialog-desc').style.display = 'block'
    document.getElementById('messageSuccess').style.display = 'none';
    document.getElementById('connexiontitle').style.display = 'none';
    document.getElementById('inscription').style.display = 'none';
    document.getElementById('inscriptiontitle').style.display = 'block';
}

document.getElementById('connexion').onsubmit = function(event){
    event.preventDefault(); 
    connexionStape();
}

document.getElementById('inscription').onsubmit = function(event){
    event.preventDefault(); 
    inscriptionStape();
}

function inscriptionStape(){
    document.getElementById('dialog-desc').style.display ="none";
    if (document.getElementById('newPass').value==document.getElementById('confirmNewPass').value == "" || document.getElementById('idInscription').value ==""){
        alert("Veuillez remplir les champs"); 
    }
    var userAlreadyExist = false;
    let bddItems = localStorage.getItem('coupleID');
    bddItems = JSON.parse(bddItems);
    for (let i=0; i < Object.keys(bddItems).length; i++) { 
       if( document.getElementById('idInscription').value==bddItems[["user"+(i+1)]].userName){
           userAlreadyExist = true ;
       };
    }

    if(document.getElementById('newPass').value==document.getElementById('confirmNewPass').value && userAlreadyExist == false){
        var newUser = {tag : 'user'+(bdd.length+1) , userName :document.getElementById('idInscription').value ,motDePasse : document.getElementById('confirmNewPass').value};
        bdd.push(newUser);
        setIdentifiants(newUser);
        document.getElementById('inscription').style.display = 'none';
        document.getElementById('messageSuccess').innerHTML = "Inscription réussi vous pouvez vous connecter";
        document.getElementById('connexiontitle').style.display = 'block';
    }   else if(userAlreadyExist = true){
        alert('Cet identifiant existe déjà');
    }   else{
        alert('Les mots de passe doivent être identique');
    }
}

function connexionStape(){
    let bddItems = localStorage.getItem('coupleID');
    bddItems = JSON.parse(bddItems);
    var connexionOK = false;
    for (let i=0; i < Object.keys(bddItems).length; i++) { 
        if( document.getElementById('pass').value==bddItems[["user"+(i+1)]].motDePasse && document.getElementById('identifiant').value==bddItems[["user"+(i+1)]].userName){
        connexionOK = true;
       };
    }
    
    if (connexionOK == true){
        sessionStorage.setItem('userConnected','true');
        connexionText.id = 'messageConnexionOn';
        connexionText.innerHTML="Vous êtes connecté en tant que "+document.getElementById('identifiant').value;
        document.getElementById('client-space').append(connexionText);
        disconnectButton.innerHTML='Déconnexion';
        disconnectButton.id="disconnectbtn";
        disconnectButton.setAttribute('onclick','deco()');
        document.getElementById('client-space').append(disconnectButton);
        document.getElementById('inscription').style.display ='none';
        document.getElementById('connexion').style.display ='none';
        document.getElementById('dialog-desc').style.display ='none';
        document.getElementById('inscriptiontitle').style.display ='none';
        document.getElementById('messageSuccess').style.display ='none';
    } else{
        alert('Le mot de passe ou identifiant est invalide');
        console.log(bddItems.user+(1).motDePasse,bddItems.user+(1).userName);
    }
}

function userConnected(){
    if(sessionStorage.getItem('userConnected')==='true'){
        document.getElementById('contenuform').style.display='none';
        connexionText.id = 'messageConnexionOn';
        connexionText.innerHTML="Vous êtes connecté en tant que "+localStorage.getItem('identifiantUser');
        document.getElementById('client-space').append(connexionText);
        disconnectButton.innerHTML='<ion-icon name="power-outline"></ion-icon> Déconnexion';
        disconnectButton.id="disconnectbtn";
        disconnectButton.setAttribute('onclick','deco()');
        document.getElementById('client-space').append(disconnectButton);
        document.getElementById('connexiontitle').style.display ="none";
        document.getElementById('dialog-desc').style.display ="none";
    }
}
userConnected();

function deco(){
    sessionStorage.clear();
    window.location.reload();
}
 let bdd = [ {tag : 'user1' , userName :"paul69" ,motDePasse : "123"}, {tag : 'user2' , userName :"leo69" ,motDePasse :"678"}];
 for (let i=0; i <= bdd.length-1; i++) { 
    setIdentifiants(bdd[i]);
 }
 function setIdentifiants(bdd) {
    let bddItems = localStorage.getItem('coupleID');
    bddItems = JSON.parse(bddItems);
    if(bddItems !== null) {
        if(bddItems[bdd.tag] == undefined) {
            bddItems ={
                ...bddItems,
                [bdd.tag] : bdd
            }
        }   
    }  else{
            bddItems ={
                    [bdd.tag] : bdd
            }
    }
    localStorage.setItem("coupleID", JSON.stringify(bddItems));
}