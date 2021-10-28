<template>
    <div class="conteneur_sendMessage">
        <div>
            <p>Poster un message</p>
        </div>

        <div class="conteneur_texte">
            <textarea required v-model="contenu"></textarea>
        </div>

        <div class="conteneur_envoie">
            <input type="file" @change='onFileSelected'>
            <p>Ajouter une image</p>
            <button @click='envoieForm'>Envoyé</button>
        </div>
        
        <div class="separateur"></div>
    </div>
</template>

<script>

export default({
    name: 'SendMessage',
    data(){
        return{
            contenu: null,
            file: null,
        }
    },
    methods: {
        onFileSelected: function(event){
            this.file = event.target.files[0]
        },
        chkForm: function(){
            if(this.contenu){
                return true;
            }
            return false;
        },
        envoieForm: function(){
            if(this.chkForm()){
                let donnee;
                let token =  localStorage.getItem('token');
                console.log(this.file);
                if(this.file){
                    donnee = {contenu: this.contenu, file: this.file, author: localStorage.getItem('user')};
                    fetch('http://localhost:3000/images', { 
                        method: 'POST',
                        headers:{
                            'Accept': 'application/json', 
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                        },
                        body: JSON.stringify(this.file),
                    })
                    .then(res =>{
                        alert(res.body)
                    })
                    .catch(error => alert(error))
                } else {
                    donnee = {contenu: this.contenu, author: localStorage.getItem('user')}; 
                }

                fetch('http://localhost:3000/api/message/', { 
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify(donnee),
                })
                .then(res =>{
                    alert(res.body)
                })
                .catch(error => alert(error))
                


            } else {
                alert("Veuillez remplir la zone texte");
            }
        }
    }
})
</script>

<style scoped>
.conteneur_sendMessage{
    width: 90%;
    margin: 0 auto;
}

.conteneur_texte{
    display: flex;
    justify-content: center;
}

textarea{
    width: 100%;
    margin: 0 auto;
    height: 100px;
    font-size: 1.5em;
}
.conteneur_envoie{
    display: flex;
    width: 100%;
    margin-top: 5px;
    align-items: center;
}

.conteneur_envoie:last-child{
    justify-self: flex-end;
}

.separateur{
    background-color: black;
    width: 80%;
    height: 2px;
    margin: 20px auto 0 auto;
}

#ajout_image{
    border-radius: 20px;
    width: 35px;
    height: 35px;
    background-color: rgb(131, 197, 131);
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 5px;

}

#btn_envoi{
    background-color: #f2f2f2;
    border: 1px solid black;
    width: 35%;
    margin: 20px auto;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
}

</style>
