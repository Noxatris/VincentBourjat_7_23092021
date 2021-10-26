<template>
    <div class="conteneur_message">
    
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
            tabMessage[3] = document.createElement('div'); // div image
            tabMessage[4] = document.createElement('div'); // div like 
            tabMessage[5] = document.createElement('div'); // Div commentaire

            tabMessage[6] = document.createElement('p'); // Conteneur nom

            if(donnee["author"] == this.userId || this.role == "admin"){
                tabMessage[7] = document.createElement('input'); // button
                tabMessage[1].appendChild(tabMessage[7]);
                tabMessage[7].classList.add("btn_suppr");
                tabMessage[7].setAttribute('type', 'button');
                tabMessage[7].value = 'X';
            }

            tabMessage[8] = document.createElement('p'); // Texte du message

            tabMessage[9] = document.createElement('img'); // Image du message

            tabMessage[10] = document.createElement('input'); // Bouton Like
            tabMessage[11] = document.createElement('input'); // Bouton dislike

            tabMessage[12] = document.createElement('input'); // Button commentaire

            tabMessage[0].appendChild(tabMessage[1]);
            tabMessage[0].appendChild(tabMessage[2]);
            tabMessage[0].appendChild(tabMessage[3]);
            tabMessage[0].appendChild(tabMessage[4]);
            tabMessage[0].appendChild(tabMessage[5]);

            tabMessage[1].appendChild(tabMessage[6]);
            

            tabMessage[2].appendChild(tabMessage[8]);

            tabMessage[3].appendChild(tabMessage[9]);

            tabMessage[4].appendChild(tabMessage[10]);
            tabMessage[4].appendChild(tabMessage[11]);

            tabMessage[5].appendChild(tabMessage[12]);

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
            
            tabMessage[8].innerText = donnee["contenu"];
            tabMessage[9].setAttribute("src", donnee["imageUrl"]);

            tabMessage[0].classList.add("conteneur_message");
            tabMessage[1].classList.add("conteneur_texte");
            tabMessage[0].classList.add("conteneur");
            tabMessage[0].classList.add();
            tabMessage[0].classList.add();
            tabMessage[0].classList.add();
            

            
            let conteneurMessage = document.getElementsByClassName("conteneur_message");
            conteneurMessage[0].appendChild(tabMessage[0]);
        },
    },
    beforeMount(){
        this.recuperationDonnee();
    }
})
</script>

<style scoped>

</style>
