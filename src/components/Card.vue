<template>
  <div class="cardContainer">
    <b-row class="h-100 p-2">
      <b-col cols="2" class="d-flex align-items-center justify-content-center">
        <img :src="repository.owner.avatar_url" class="cardImg" />
      </b-col>
      <b-col cols="8" class="d-flex align-items-center justify-content-start">
        <b-row>
          <b-col cols="12" class="pb-2 cardTitle">
            <span>{{ repository.full_name }}</span>
          </b-col>
          <b-col cols="12" class="pt-2">
            <span>{{ repository.description }}</span>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="2" class="d-flex align-items-center justify-content-end">
        <b-icon-chevron-right class="icon"></b-icon-chevron-right>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import "../assets/Card.css";

export default {
  name: "CardComponent",
  props: {
    repository: Object,
  },
};
</script>
<style></style>
