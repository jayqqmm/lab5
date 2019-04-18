<template>
  <div class = "photo">
  <img v-bind:src="photos.path" />
  <p> {{photos.title}}</p>
  <p> {{photos.description}}</p>
  <p> {{photos.user.name}} </p>
  {{formatDate(photos.created)}}

<div v-if="user">
<h3>Add a Comment</h3>
      <form v-on:submit.prevent="addComment(photos, user)">
        <textarea v-model="addedComment"></textarea>
        <br />
        <button type="submit">Comment</button>
      </form>
      <h3>Comments</h3>

      <div v-for="comment in comments">

        <span v-if="comment.photoID == photos._id" >
        <hr>
        {{comment.comment}}
        <br>
        {{formatDate(comment.created)}}
        <br>
        {{comment.photoUser}}
        </span>


      </div>
      </div>


  </div>
</template>

<script>
// @ is an alias to /src
import moment from 'moment';

export default {
  name: 'photo',
  props: {
    addedComment: String,
    comments: {},
  },
  data() {
  return{
    addedComment: '',
    }
  },
  components: {
  },
  computed: {
  user() {
    return this.$store.state.user;
  },
    photos() {
      return this.$store.state.photo1;
    },
    comments() {
    return this.$store.state.comments;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getOnePhotos");
    await this.$store.dispatch("getComments");
  },
  methods: {
   formatDate(date) {
     if (moment(date).diff(Date.now(), 'days') < 15)
       return moment(date).fromNow();
     else
       return moment(date).format('d MMMM YYYY');
   },
   addComment(photos, user) {
   let photoID = photos._id;
   let photoUser = user.name;

   this.$store.dispatch("addComment",{addedComment: this.addedComment, photoID, photoUser });

   }

}
}
</script>
