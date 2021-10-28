<template>
    <div>
        <Header/>
        <p>Souhaiter supprimé votre compte</p>
        <div>
            <button @click="suppressionCompte">Oui</button>
            <button @click="retourMain">Non</button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default({
    components: {
        Header,
    },
    data(){
        return{
            userId: localStorage.getItem("user"),
            token: localStorage.getItem("token")
        }
    },
    methods:{
        suppressionCompte: function(){
            fetch("http://localhost:3000/api/auth/"+ this.userId, {
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                }
            })
            .then(() => {
                this.$router.push({ path: '/'})
            })
            .catch()
        },
        retourMain: function(){
            this.$router.push({ path: '/Main'})
        }
    }
})


</script>
