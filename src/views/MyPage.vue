<template>
<div>
  <div v-if="user">
    <div class="header">
    <image-gallery :photos="photos" />
    </div>
  </div>
  <div v-else>
    <p>If you would like to upload photos, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>


<script>
import ImageGallery from '@/components/ImageGallery.vue'
export default {
  name: 'mypage',
  components: {
    ImageGallery,
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    photos() {
     return this.$store.state.meals;
   }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMeals");
  },
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>
