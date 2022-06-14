<template>
  <div class="head" id="nav">
    <b-container class="h-100">
      <b-row class="justify-content-center h-100" align-v="center">
        <b-col cols="4" md="6" lg="2" class="d-flex justify-content-center">
          <router-link to="/">Pesquisa</router-link>
        </b-col>
        <b-col cols="4" md="6" lg="2" class="d-flex justify-content-center">
          <router-link to="/favoritos">Favoritos</router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import "../assets/style.css";
export default {
  name: "HeaderMenu",
};
</script>
