<template>
  <div class="bodyItem">
    <b-row class="justify-content-center">
      <b-col class="d-flex justify-content-center align-items-center" cols="12">
        <span class="title">Como podemos simplificar seu código hoje? </span>
      </b-col>
      <b-col cols="12" class="d-flex justify-content-center align-items-center">
        <div class="searchBar">
          <b-input-group class="mt-4">
            <b-form-input v-model="search"></b-form-input>
            <b-input-group-append>
              <b-button variant="light" v-on:click="test(search)">
                <b-icon-search
                  style="color: black; font-weight: bold"
                ></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </b-col>
      <b-col cols="12">
        <b-row v-for="item in results" :key="item.id">
          <b-col
            cols="12"
            class="d-flex justify-content-center align-items-center"
          >
            <CardComponent :repository="item" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import "../assets/style.css";
import "../assets/Textbox.css";
import CardComponent from "../components/Card.vue";

export default {
  name: "SearchPage",
  components: {
    CardComponent,
  },
  methods: {
    test: function (search) {
      fetch(
        `https://api.github.com/search/repositories?page=3&per_page=4&q=${search}&sort=stars&order=desc`
      )
        .then(async (response) => {
          const data = await response.json();
          this.results = data.items;
          console.log(data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
  data() {
    return {
      results: [],
    };
  },
};
</script>
<style></style>
