<template>
  <b-container class="bodyItem">
    <b-row class="justify-content-center">
      <b-col class="d-flex justify-content-start align-items-center" cols="8">
        <span class="title"> Favoritos </span>
      </b-col>
      <b-col cols="12">
        <b-row v-for="item in repositories" :key="item.id">
          <b-col
            cols="12"
            class="d-flex justify-content-center align-items-center"
          >
            <CardComponent :repository="item" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import CardComponent from "../components/Card.vue";

export default {
  name: "FavoritesPage",
  components: {
    CardComponent,
  },
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    const fav = localStorage.getItem("repositorios");
    this.repositories = JSON.parse(fav);
  },
};
</script>
<style lang=""></style>
