<template>
    <div class="liste_message">
    
    </div>
</template>

<script>
export default ({
    name: 'ListeMessage',
    data(){
        return {
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('user'),
            role: ''
        }
    },
    methods: {
        recuperationDonnee: function(){
            fetch('http://localhost:3000/api/message/', { 
                    method: 'GET',
                    headers:{
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.token
                    }
            })
            .then(res => {
                if(res.ok){
                    return res.json();
                }
            })
            .then(value => {
                this.affichageMessage(value);
            })
            .catch()
        },
        affichageMessage: function(donnee){
            for(let i=0; i < donnee.length; i++){
                this.creationMessage(donnee[i]);
            }
        },
        creationMessage: function(donnee){
            let tabMessage = [];

            tabMessage[0] = document.createElement('div'); // Div Principale
            tabMessage[1] = document.createElement('div'); // Div Nom / supprimer le message
            tabMessage[2] = document.createElement('div'); // div Texte
            tabMessage[4] = document.createElement('div'); // div like 
            tabMessage[5] = document.createElement('div'); // Div commentaire

            tabMessage[6] = document.createElement('p'); // Conteneur nom


            tabMessage[1].appendChild(tabMessage[6]);

            if(donnee["author"] == this.userId || this.role == "admin"){
                tabMessage[7] = document.createElement('input'); // button
                tabMessage[1].appendChild(tabMessage[7]);
                tabMessage[7].classList.add("btn_suppr");
                tabMessage[7].setAttribute('type', 'button');
                tabMessage[7].value = 'X';
            }

            tabMessage[8] = document.createElement('p'); // Texte du message

            if(donnee["imageUrl" != null]){
                tabMessage[3] = document.createElement('div'); // div image
                tabMessage[0].appendChild(tabMessage[3]);
                tabMessage[9] = document.createElement('img'); // Image du message
                tabMessage[3].appendChild(tabMessage[9]);

                // Ajout de l'image
                tabMessage[9].setAttribute("src", donnee["imageUrl"]);
            }

            tabMessage[10] = document.createElement('a'); // Bouton Like
            tabMessage[11] = document.createElement('a'); // Bouton dislike

            tabMessage[12] = document.createElement('input'); // Button commentaire

            tabMessage[13] = document.createElement('div'); // Conteneur commentaire

            tabMessage[14] = document.createElement('p'); // Nombre Like
            tabMessage[15] = document.createElement('p'); // Nombre Dislike

            tabMessage[16] = document.createElement('i'); // Icone Like
            tabMessage[17] = document.createElement('i'); // Icone Dislike

            tabMessage[18] = document.createElement('i'); // Icone like remplie
            tabMessage[19] = document.createElement('i'); // Icone Dislike remplie

            tabMessage[0].appendChild(tabMessage[1]);
            tabMessage[0].appendChild(tabMessage[2]);
            tabMessage[0].appendChild(tabMessage[4]);
            tabMessage[0].appendChild(tabMessage[5]);
            
            tabMessage[2].appendChild(tabMessage[8]);

            // Like / Dislike
            tabMessage[4].appendChild(tabMessage[10]);
            tabMessage[4].appendChild(tabMessage[11]);
            

            tabMessage[10].appendChild(tabMessage[16]);
            tabMessage[10].appendChild(tabMessage[17]);
            tabMessage[10].appendChild(tabMessage[14]);

            tabMessage[11].appendChild(tabMessage[18]);
            tabMessage[11].appendChild(tabMessage[19]);
            tabMessage[11].appendChild(tabMessage[15]);

            tabMessage[5].appendChild(tabMessage[12]);



            // Récupération et affichage du nom de l'auteur
            fetch('http://localhost:3000/api/auth/' + donnee["author"], { 
                method: 'GET',
                headers:{
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            })
            .then(res => {
                if(res.ok){
                    return res.json();
                }
            })
            .then(value => {                
                tabMessage[6].innerText = value[0]["name"];               
            })
            .catch()
            
            // Ajout du texte du message
            tabMessage[8].innerText = donnee["contenu"];

            // Gestion Like / Dislike
            tabMessage[14].innerText = donnee["like"];
            tabMessage[15].innerText = donnee["dislike"]

            // Gestion Commentaire
            tabMessage[12].setAttribute("type", "button");
            tabMessage[12].setAttribute("value", "Commentaires");
            
            tabMessage[0].classList.add("conteneur_message");
            tabMessage[1].classList.add("conteneur_texte");
            tabMessage[2].classList.add("conteneur_contenu");
            tabMessage[4].classList.add("conteneur_avis");
            tabMessage[5].classList.add("conteneur_btn_commentaire");


            tabMessage[16].classList.add("far");
            tabMessage[16].classList.add("fa-thumbs-up");

            tabMessage[17].classList.add("far");
            tabMessage[17].classList.add("fa-thumbs-down");

            tabMessage[18].classList.add("fas");
            tabMessage[18].classList.add("fa-thumbs-up");
            tabMessage[18].classList.add("invisible");

            tabMessage[19].classList.add("fas");
            tabMessage[19].classList.add("fa-thumbs-down");
            tabMessage[19].classList.add("invisible");

            /*-----------------------------------------------------
                                COMMENTAIRE
            -----------------------------------------------------*/
            let commentaire = []
            commentaire = this.recuperationCommentaire(donnee["id"]);
            console.log(commentaire);

            for(let i = 0; i < commentaire.length; i++){
                let newCom = this.creationCommentaire(commentaire[i])
                tabMessage[13].appendChild(newCom);
            }

            

            
            let conteneurMessage = document.getElementsByClassName("liste_message");
            conteneurMessage[0].appendChild(tabMessage[0]);
        },

        recuperationCommentaire: async function(id){
            fetch('http://localhost:3000/api/commentaire/' + id, { 
                method: 'GET',
                headers:{
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            })
            .then(res => {
                if(res.ok){
                    return res.json();
                }
            })
            .then(value => {                
                return value;              
            })
            .catch()
        },

        creationCommentaire: function(commentaire){
            let tabCommentaire = [];

            tabCommentaire[0] = document.createElement("div"); // Div englobant le commentaire
            tabCommentaire[1] = document.createElement("div"); // Div contenant le nom ainsi que le bouton pour le supprimer
            tabCommentaire[2] = document.createElement("p"); // Contient le nom de l'auteur
            tabCommentaire[3] = document.createElement("p"); // Contient le contenu du commentaire

            tabCommentaire[0].appendChild(tabCommentaire[1]);
            tabCommentaire[0].appendChild(tabCommentaire[3]);

            tabCommentaire[1].appendChild(tabCommentaire[2]);

            fetch('http://localhost:3000/api/auth/' + commentaire["author"], { 
                method: 'GET',
                headers:{
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            })
            .then(res => {
                if(res.ok){
                    return res.json();
                }
            })
            .then(value => {                
                tabCommentaire[2].innerText = value[0]["name"];               
            })
            .catch()
            tabCommentaire[3].innerText = commentaire["contenu"];

            return tabCommentaire[0];
        }
    },
    beforeMount(){
        this.recuperationDonnee();
    }
})
</script>

<style>
    .conteneur_message{
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: 20px auto;
        border: 1px solid black;
        border-radius: 15px;
    }
    
    /* Titre + bouton suppr */
    .conteneur_texte{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
    }

    .conteneur_texte p{
        width: 20%;
        margin-left: 10px;
    }

    .conteneur_texte input{
        border-radius: 15px;
        height: 30px;
        width: 30px;
        margin: auto 10px;
    }

    /* Avis */
    .conteneur_avis {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 35px;
    }

    .conteneur_avis p {
        margin: 0 15px;
    }

    .conteneur_avis svg{
        position: absolute;
        cursor: pointer;
        height: 50%;
    }

    .conteneur_avis .fa-thumbs-up{
        right: 19%;
    }

        .conteneur_avis .fa-thumbs-down{
        right: 8%;
    }

    .invisible{
        opacity: 0;
    }

    /* Texte */
    .conteneur_contenu{
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid black;
    }

    .conteneur_contenu p {
        margin-left: 5px;
    }

    /* Commentaire (bouton) */
    .conteneur_btn_commentaire{
        width: 100%;
        overflow: hidden;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .conteneur_btn_commentaire input{
        width: 100%;
        height: 25px;
    }

</style>
