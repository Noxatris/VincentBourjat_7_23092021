<template>
    <div class="conteneur_header">
        <div class="conteneur_image">
            <img alt="Logo Groupomania" src="@/assets/icon-left-font-monochrome-black.svg">
        </div>
        <div class="conteneur_icone">
            <router-link to="/Profile"><i class="fas fa-user"></i></router-link>
            <router-link to="/"><i class="fas fa-sign-out-alt"></i></router-link>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'Header'
})
</script>


<style scoped>
.conteneur_header{
    width: 100%;
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: gray
}

.conteneur_image{
    display: flex;
    align-items: center;
    width: 55%;
}

.conteneur_image img{
    width: 100%;
}


.conteneur_icone{
    width: 35%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 1.5em;
}

a{
    text-decoration: none;
    color: black;
    width: 50%;
    height: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 15px;
}

</style>