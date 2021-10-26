<template>
    <div class="conteneur_form">
        <div class="conteneur_input">
            <p>Email :</p>
            <input type="email" required id="email" v-model="email">
        </div>
        <div class="conteneur_input">
            <p>Mot de passe :</p>
            <input type="password" required id="password" v-model="password">
        </div>
        <button @click="envoieFormulaire">Connection</button>
    </div>
</template>

<script>
export default ({
    name: 'FormLogin',
    data() {
        return {
        email: null,
        password: null,
        errors: []
        }
    },
    methods: {
        checkForm: function(){
            if(this.email && this.password){
                return true;
            }

            this.errors = [];

            if(!this.email){
                this.errors.push('Email requis');
            }
            if(!this.password){
                this.errors.push('Mot de passe requis');
            }

            return false;
        },
        envoieFormulaire: function(){
            if(this.checkForm()){
                fetch('http://localhost:3000/api/auth/login', { 
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: this.email, password: this.password})
                })
                .then(res => {
                    if(res.ok){
                        return res.json();
                    }
                })
                .then(value => {
                    localStorage.setItem('token', value.token);
                    localStorage.setItem('user', value.userId);
                    this.$router.push({ path: '/Main'})
                })
                .catch()
            } else{
                alert(this.errors[0])
            }
        },

        goMainPage: function(){
            this.$router.push({ path: '/Main'})
        }
    }
})
</script>

<style scoped>
.conteneur_form{
    margin: 0 auto;
    width: 90%;
    font-size: 1.3em;
    display: flex;
    flex-direction: column;

}

.conteneur_input {
    display: flex;
    flex-direction: column;
}

p{
    margin: 10px 0;
}

input{
    height: 25px;
}


button{
    margin-top: 50px;
    background-color: #f2f2f2;
    border: 1px solid black;
    width: 65%;
    margin: 20px auto;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
}
</style>


