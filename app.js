
    
    
    // au chargement de la page en appelle une fonction anonime
    
    document.body.onload=function(){

        //on reincialise les variable, 8 immages et la position 0(pour apres la decale a gauche au a droite pour faire effet caroussel)
        nombre=8;
        p=0;
    
        //je recuper different objet de JS
        //containner et button gauche et droite
        container=document.getElementById("container");
        g=document.getElementById("g");
        d=document.getElementById("d");
        // je modifie le largeur du contenneur (on applique une taille et on multiplie par nombre de immages px=unites)
        container.style.widith=(195*nombre)+"px";
    
        //je prossede au traitement iteratiuve ineration d'immages
        //immage se trouve dans le divs que je creee dinamiquement
        
        for(let index=1;index<=nombre;index++){
        div=document.createElement("div");

        //j'applique une classe a ces dives
        div.className="photo";

        // je specifie differant immages
        div.style.backgroundImage="url('img/img"+index+".jpg')";
        // j'ajute ces dives dans le container principal
        container.appendChild(div);
    }
        afficherMasquer();
    }
    // je programme les button, je click sur la gauche on se deplace vers la gauche
    g.onclick=function(){
        if(p>-nombre+1) //une condition pour que ca se limit (si p est superieur a -nbr+1 (superieur a :-7, j'arret animer la caroussel))
        p--; //position negatif je decrement 
        container.style.transform="translate("+p*195+"px)"; // la valeur c'est p *la largeur d'image
        // j'applique une transition avec le css
        container.style.transition="all 0.5s ease";
        afficherMasquer(); // une funtion afficher et masquer les button
    }
    d.onclick=function(){
        if(p<0)
        p++; // j'incriment en plus
        container.style.transform="translate("+p*195+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
    function afficherMasquer(){ // on verifie la valleur p por savoir si afficher ou masquer
        if (p==-nombre+1) // si p est =- on masque le button a gauche
            g.style.visibility="hidden";
        else // si non on affiche
            g.style.visibility="visible";
        if (p==0) 
            d.style.visibility="hidden";
        else
            d.style.visibility="visible";
    }

    
    // // Get the modal
    // var modal = document.getElementById("myModal");

    // // Get the button that opens the modal
    // //var btn = document.getElementById("myBtn");
    
    // // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];
    
    // // When the user clicks the button, open the modal 
    
    // //When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }
    
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }

//function conscscructeur
const results = document.querySelector('.results');

let images =  document.querySelectorAll('#carrousel img');
console.log(images);

//recuperation des boutons
let boutons = document.querySelectorAll('#carrousel button');
console.log(boutons);
boutons.forEach((el, index)=> {
    el.addEventListener('click', el => {
        console.log(el);
        console.log(index)
        affichePopup(index)
    })
})
// let htmlPopup = `<div>
//                 <img src="img/img1.jpg" alt="" >
//                 <div><h2>titre</h2></div>
//                 <div><h3>texte</h3></div>
//                 </div>
// `
//document.body.appendChild = htmlPopup

function affichePopup(index) {
    let dialog = document.createElement("dialog");
    document.body.appendChild(dialog)
    let image = document.createElement("img")
    let text = document.createElement("p")
    let textG = document.createElement("h2")
    textG.innerText = "Lorem iet consectetur adipis";
    text.innerText =("Lorem iet consectetur adipisicing elit .Quo error accusamus , adipisicing elit facere qui pariatur officiisQuo error acere qui pariatur officiis accusamus, Quo error accusamus , adipisicing elit facere facere qui pariatur officiis")
    image.classList.add("imagePopup");
    image.src = images[index].src

    dialog.appendChild(textG);
    dialog.appendChild(image);
    dialog.appendChild(text);
    
    dialog.showModal();

    dialog.addEventListener('click', e => dialog.close())

  }