<template>
  <div class="cardContainer">
    <b-row class="h-100 p-2">
      <b-col cols="2" class="d-flex align-items-center justify-content-center">
        <img :src="repository.owner.avatar_url" class="cardImg" />
      </b-col>
      <b-col cols="8" class="d-flex align-items-center justify-content-start">
        <b-row>
          <b-col cols="12" class="pb-2 cardTitle d-flex align-items-center">
            <div>
              <span>{{ repository.full_name }}</span>
              <img
                v-if="favorite"
                :src="selected"
                v-on:click="favoriteRepo()"
                class="px-2"
              />
              <img
                v-else
                :src="notSelected"
                v-on:click="favoriteRepo()"
                class="px-2"
              />
            </div>
          </b-col>

          <b-col cols="12" class="pt-2">
            <span>{{ repository.description }}</span>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="d-flex align-items-center justify-content-end">
        <router-link to="/Detalhes">
          <b-icon-chevron-right
            class="icon"
            v-on:click="selectRepo()"
          ></b-icon-chevron-right>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import "../assets/Card.css";
import store from "../store";

export default {
  name: "CardComponent",
  props: {
    repository: Object,
  },
  data() {
    return {
      store,
      favorite: false,
      selected: require("../assets/Selected.svg"),
      notSelected: require("../assets/NotSelected.svg"),
    };
  },
  methods: {
    favoriteRepo: function () {
      var repositorio = localStorage.getItem("repositorios");
      repositorio = JSON.parse(repositorio);
      console.log(repositorio);
      const item = {
        id: this.repository.id,
        full_name: this.repository.full_name,
        description: this.repository.description,
        owner: { avatar_url: this.repository.owner.avatar_url },
        stars: this.repository.stargazers_count,
        watchers: this.repository.watchers,
        updated_at: this.repository.updated_at,
      };
      if (repositorio === null) {
        repositorio = [item];
        localStorage.setItem("repositorios", JSON.stringify(repositorio));
      } else {
        let exists = repositorio.some((repo) => repo.id === item.id);
        if (exists) {
          repositorio = repositorio.filter((repo) => repo.id != item.id);
        } else {
          repositorio.push(item);
        }
        localStorage.setItem("repositorios", JSON.stringify(repositorio));
      }
      console.log(repositorio);
      this.favorite = !this.favorite;
    },
    selectRepo: function () {
      const item = {
        id: this.repository.id,
        full_name: this.repository.full_name,
        description: this.repository.description,
        owner: { avatar_url: this.repository.owner.avatar_url },
        stars: this.repository.stargazers_count,
        watchers: this.repository.watchers,
        updated_at: this.repository.updated_at,
      };
      localStorage.setItem("repositorioSelecionado", JSON.stringify(item));
    },
  },
  created() {
    const fav = localStorage.getItem("repositorios");
    const favArray = JSON.parse(fav);
    console.log(fav);
    if (favArray != null) {
      if (favArray.some((repo) => repo.id === this.repository.id) > 0) {
        this.favorite = true;
      } else {
        this.favorite = false;
      }
    }
    console.log(this.favorite);
  },
};
</script>
