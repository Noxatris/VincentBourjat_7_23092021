<template>
  <div class="conteneur_menu_principale">
    <div class="conteneur_img_menu">
      <img alt="Logo Groupomania" src="@/assets/icon-left-font-monochrome-black.svg">
    </div>
    <div class="conteneur_menu">
      <router-link to="/login">Connexion</router-link>
      <router-link to="/register">S'enregistrer</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.conteneur_menu_principale{
  margin-top: 100px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.conteneur_menu{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
}

.conteneur_img_menu{
  width: 85%;
  margin: 10px auto;
}

.conteneur_img_menu img{
  width: 100%;
}

a{
    border: 1px solid orange;
    background-color: #555454;
    color: orange;
    width: 220px;
    height: 60px;
    border-radius: 15px;
    margin: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
</style>