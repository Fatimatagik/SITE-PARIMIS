let button = document.getElementById('button')
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let telephone = document.getElementById('telephone');
let client = document.getElementById('client');
let enfant = document.getElementById('enfant');
let gamme = document.getElementById('gamme');
let datearrivee = document.getElementById('datearrivee');
let datedepart = document.getElementById('datedepart');
let personne = document.getElementById('personne');
let menu = document.getElementById('menu');
let spa = document.getElementById('spa');
let date = document.getElementById('date');
let message = document.getElementById('message');

let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_telephone = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
let regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
let regex_datearrivee = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
let regex_datedepart = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

console.log(button)
    button.addEventListener('click', (event) => { 
        event.preventDefault();
        
        document.getElementById('erreur_nom').innerHTML = ''
        if (nom.value===""){
            document.getElementById('erreur_nom').innerHTML =`
            <p class='erreur'> veuillez saisir votre nom </p>`
        }
        else if(nom.value.length <10 || nom.value.length >15){
            document.getElementById('erreur_nom').innerHTML =
            `<p class= 'erreur'> Veuillez saisir votre nom</p>`
        }

        document.getElementById('erreur_prenom').innerHTML=''
        if(prenom.value===""){
            document.getElementById('erreur_prenom').innerHTML=`
            <p class= 'erreur'> veuillez saisir votre prénom</p>`
        }
        else if(prenom.value.length <10||prenom.value.length> 15){
            document.getElementById('erreur_prenom').innerHTML=
            `<p class='erreur'> Veuillez saisir votre prénom </p>`
        }

        document.getElementById('erreur_mail').innerHTML=''
        if(!regex_email.test(email.value)){
            document.getElementById('erreur_mail').innerHTML=`
            <p class= 'erreur'> veuillez saisir votre mail</p>`
        }
        
        document.getElementById('erreur_telephone').innerHTML=''
        if(prenom.value===""){
            document.getElementById('erreur_telephone').innerHTML=`
            <p class= 'erreur'> veuillez saisir votre numéro de téléphone </p>`
        }
        
        

    
        
        
        








    })

