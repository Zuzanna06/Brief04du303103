
    
    
        // au chargement de la page en appelle une fonction anonime
        //expression ou fonction lambda.. une fonction n'ayant pas de nom
    
        document.body.onload=function(){

        // je réinitialise les variables, 8 images et la position 0
        //(pour apres on la decale a gauche au a droite pour faire effet caroussel)
        nombre=8;
        p=0;
    
        // je recuper different objets de JS
        // containers et buton gauche et droite
        container=document.getElementById("container");
        g=document.getElementById("g");
        d=document.getElementById("d");
        // je modifie largeur du contenneur (on applique une taille 
        //et on multiplie par nombre de immages px=unites)
        container.style.width=(195*nombre)+"px"; //mon erreur 
    
        // je prossede au traitement itération, la transformation ineration d'immages
        // image se trouve dans le div que je crée dynamiquement
        for(let index=1;index<=nombre;index++){
        div=document.createElement("div");

        // j'applique une classe ces divs
        div.className="photo";

        // je spécifie différents images
        div.style.backgroundImage="url('img/img"+index+".jpg')";
        // j'ajute ces divs dans le container principal
        container.appendChild(div);
    }
        afficherMasquer();
    }
    // je programme les button, je click sur la gauche on se deplace vers la gauche
    g.onclick=function(){
        if(p>-nombre+1) 
        //une condition pour que ca se limit 
        //(si p est superieur a -nbr+1 (superieur a :-7, j'arret animer la caroussel))
        p--; //position negatif je decrement 
        container.style.transform="translate("+p*195+"px)"; 
        // la valeur c'est p *la largeur d'image
        // j'applique une transition avec le css
        container.style.transition="all 0.5s ease";
        afficherMasquer(); // une funtion afficher et masquer les button
    }
    d.onclick=function(){
        if(p<0)
        p++; // j'incrémente en plus
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

    
    

//fonction constructeur
const results = document.querySelector('.results');

let images =  document.querySelectorAll('#carrousel img');
console.log(images);

//recuperation des boutons funtion flechee
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

// La méthode appendChild() ajoute un élément comme dernier enfant d'un élément
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
    
    dialog.showModal(); //affiche toit a ecrant

    dialog.addEventListener('click', e => dialog.close())

  }