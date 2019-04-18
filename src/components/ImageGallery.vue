<template>
<div id="photo">
  <div class="image" v-for="photo in photos" v-bind:key="photo._id">

    <a href=/photo v-on:click.prevent="clickMethod(photo)">
    <img :src="photo.path"/>
    </a>
    <p class="photoTitle">{{photo.title}}</p>
    <p>{{photo.comment}}</p>
    <p class="photoDate">
    {{formatDate(photo.created)}}
    </p>
  <form>
  <input v-model="photo.comment">
  <button v-on:click.prevent="editItem(photo)">Edit</button>
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
      this.$store.dispatch("myMeals",photo.title);
        this.$router.push('photo');
    },
  async deleteMeal(photo){
        this.$store.dispatch("deleteMeal", photo._id);
        this.$store.dispatch("getMeals");
  },
  async editItem(photo){
         this.$store.dispatch("editMeal", photo);
  },
 },
}
</script>

<style scoped>
#photo{
  text-align: center;
}
.photoTitle {
  margin: 0px;
  font-size: 2.5em;
  color: blue;
}

.photoDate {
  margin: 0px;
  font-size: 0.7em;
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
