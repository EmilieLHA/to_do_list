# to_do_list

## Partie HTML / CSS
J'ai choisi de travailler avec le CDN de Bootstrap: esthétique rapididité responsivité.

## Partie JS
Je créé un événement au click du bouton Ajouter.

Cet événement permet de créer l'ensemble des éléments html nécessaire pour chaque list item.
Comme j'ai utilisé Bootstrap, j'ajoute à chaque élement un certain nombre de classes afin de faire la mise en forme. 


Afin de fluidifier l'UX je veux également que mon utilisateur puisse valider son input en appuyant sur la touche entrée. J'ajoute donc un eventListener 'keydown' qui récupère le bouton cliqué et je retire l'événement par défaut qui consite à envoyer le formulaire.

La partie la plus intéressante du code est la suppression de la tâche qui se produit lorsqu'on appuie sur l'icone close.

Afin de pouvoir identifier de façon unique chaque élément, je lui associe un id grâce à un **attribut universel**. La particularité de cet Id est qu'il est généré automatiquement au clic d'ajout de tâche grâce à la **méthode Date.now()**. Je n'ai plus qu'à supprimer l'élement et à filtrer le tableau qui contient toutes les tâches en utilisant cet id unique.

