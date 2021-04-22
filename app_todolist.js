let monInput = document.querySelector('#newTask');
let bouton = document.querySelector('button');
let liste = document.querySelector('#list');
let tousLesElements = [];

// Ajouter un élément à la liste 

bouton.addEventListener('click', function() {

    // Création d'un index pour chaque tâche grâce à l'bjet date 
    let id = Date.now();

    // Création des éléments du DOM

    let element = document.createElement('li');
    element.classList.add('list-group-item');
    element.setAttribute('data-id', id);

    let div = document.createElement('div');
    div.classList.add('checkbox','d-flex', 'align-items-center');

    let texte = document.createElement('span');
    texte.innerText = monInput.value;

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    let supprimer = document.createElement('button');
    supprimer.classList.add('btn','btn-link', 'ms-auto');
    supprimer.addEventListener('click', supprimerTache);

    let closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', 'ressources/close-button.png');


    // Rétinitaliser l'input à chaque saisie 
    monInput.value = '';

    // Ajout de la tâche à tous les elements 
    tousLesElements.push(element);
    console.log(tousLesElements);
    
    // Ajout des éléments au DOM 

    supprimer.append(closeIcon);
    liste.append(element);
    element.append(div);
    div.prepend(checkbox);
    div.append(texte);
    div.append(supprimer);

});


// UX Ajouter une tache en appuyant sur entrée 

monInput.addEventListener('keydown', function(e) {
    
    if (e.key === "Enter") {
        e.preventDefault();
        bouton.click();
    };
});

// Suppression de la tache 

function supprimerTache(e) {
    tousLesElements.forEach(i => {
        console.log(e.target.parentNode.parentNode);
        if(e.target.parentNode.parentNode.getAttribute('data-id') === i.getAttribute('data-id')) {
            i.remove();
            tousLesElements = tousLesElements.filter(li => li.dataset.id !== i.dataset.id);            
        }
    })
}
