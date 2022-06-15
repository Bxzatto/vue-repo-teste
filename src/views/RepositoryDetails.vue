<template lang="">
  <b-container class="bodyItem">
    <b-row>
      <b-col cols="2">
        <img
          :src="repository.owner.avatar_url"
          class="cardImg"
          style="width: 158px; height: 158px"
        />
      </b-col>
      <b-col>
        <b-row>
          <span class="title">{{ repository.full_name }}</span>
        </b-row>
        <b-row>
          <b-col>
            <span>{{ repository.description }} </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <span> {{ repository.stargazers_count }}</span>
      </b-col>
      <b-col>
        <span> {{ repository.watchers }}</span>
      </b-col>
      <b-col>
        <span> {{ repository.updated_at }}</span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import "../assets/style.css";
export default {
  name: "RepositoryDetailsPage",
  data() {
    return {
      repository: {},
      favorite: false,
      selected: require("../assets/Selected.svg"),
      notSelected: require("../assets/NotSelected.svg"),
    };
  },
  created() {
    const storage = localStorage.getItem("repositorios");
    const array = JSON.parse(storage);
    this.repository = array[0];

    const fav = localStorage.getItem("repositorios");
    const favArray = JSON.parse(fav);
    if (favArray != null) {
      if (favArray.some((repo) => repo.id === this.repository.id) > 0) {
        this.favorite = true;
      } else {
        this.favorite = false;
      }
    }
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
  },
};
</script>
<style lang=""></style>
