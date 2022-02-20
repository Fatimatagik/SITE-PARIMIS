


let button = document.getElementById('button')
let erreur ="Veuillez renseigner tous les champs"
let inscription =document.getElementById('inscription')
let inputs =document.getElementsByTagName('input')
    console.log(inputs)


button.addEventListener('click',(event) =>{
    event.preventDefault();

    for(let i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            erreur
        }
    }

    if(erreur){
        document.getElementById('erreur').innerHTML= erreur;
        return false;
    }
    else{
        alert('Réservation validée !');
    }

})



