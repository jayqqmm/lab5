<template>
<div id="photo">
  <div class="image" v-for="photo in photos" v-bind:key="photo._id">

  <div @click="clickMethod(photo)">
    <img :src="photo.path" />
    <p class="photoTitle">{{photo.title}}</p>
    <p class="photoDate">
  <span v-if="photo.user.name">{{photo.user.name}}, </span>
  {{formatDate(photo.created)}}
    </p>
    <p>{{photo.description}}</p>
  </div>
  <form>
  <button v-on:click.prevent="deleteMeal(photo)">Delete</button>
  </form>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ImageGallery',
  props: {
    photos: Array
  },
  methods: {
   formatDate(date) {
     if (moment(date).diff(Date.now(), 'days') < 15)
       return moment(date).fromNow();
     else
       return moment(date).format('d MMMM YYYY');
   },
   clickMethod(photo) {
      this.$store.commit("setPhotoId",photo);

        this.$router.push('photo');
    },

  async deleteMeal(photo){
        this.$store.dispatch("deleteMeal", photo._id);
        this.$store.dispatch("getMeals");
  }
 },

}
</script>

<style scoped>
#photo{
  text-align: center;
}
.photoTitle {
  margin: 0px;
  font-size: 1.2em;
}

.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

p {
  margin: 0px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 400px;
  max-height: 400px;
  image-orientation: from-image;
}
</style>
