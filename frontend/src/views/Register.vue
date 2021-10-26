<template>
    <div class="conteneur_globale">
        <div class="conteneur_image">
            <img src="@/assets/icon-left-font-monochrome-black.svg" alt="Logo de Groupomania">      
        </div>
        <FormRegister/>

    </div>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue'

export default {
    components: {
        FormRegister
    }
}

</script>




<style scoped>
/*  MOBILE */
.conteneur_globale{
    display: flex;
    flex-direction: column;
    background-color: rgba(180, 180, 180, 0.384);
    border-radius: 25px;
    padding: 10px;
    height: 94vh;
}

.conteneur_image{
    width: 75%;
    margin: 50px auto 100px auto;
}

img{
    width: 95%;
}

/*  DESKTOP */
@media only screen and (min-width : 1224px) {
    .conteneur_globale{
        max-width: 500px;
        margin: 0 auto;
        height: 50vh;
    }
}
</style>
