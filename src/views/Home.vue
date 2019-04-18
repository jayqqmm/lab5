<template>
<div>
     <h1 id="mealname">{{meals.meals[0]['strMeal']}}</h1>
     <br>
     <p><img v-bind:src="meals.meals[0]['strMealThumb']" height="580" width="700"></p>
     <p>{{meals.meals[0]['strIngredient1']}} {{meals.meals[0]['strMeasure1']}}</p>
     <p>{{meals.meals[0]['strIngredient2']}} {{meals.meals[0]['strMeasure2']}}</p>
     <p>{{meals.meals[0]['strIngredient3']}} {{meals.meals[0]['strMeasure3']}}</p>
     <p>{{meals.meals[0]['strIngredient4']}} {{meals.meals[0]['strMeasure4']}}</p>
     <p>{{meals.meals[0]['strIngredient5']}} {{meals.meals[0]['strMeasure5']}}</p>
     <p>{{meals.meals[0]['strIngredient6']}} {{meals.meals[0]['strMeasure6']}}</p> 
     <p>{{meals.meals[0]['strIngredient7']}} {{meals.meals[0]['strMeasure7']}}</p>
     <p>{{meals.meals[0]['strIngredient8']}} {{meals.meals[0]['strMeasure8']}}</p>
     <p>{{meals.meals[0]['strIngredient9']}} {{meals.meals[0]['strMeasure9']}}</p>
     <p>{{meals.meals[0]['strIngredient10']}} {{meals.meals[0]['strMeasure10']}}</p>
     <p>{{meals.meals[0]['strIngredient11']}} {{meals.meals[0]['strMeasure11']}}</p>
     <p>{{meals.meals[0]['strIngredient12']}} {{meals.meals[0]['strMeasure12']}}</p>
     <p>{{meals.meals[0]['strIngredient13']}} {{meals.meals[0]['strMeasure13']}}</p>
     <p>{{meals.meals[0]['strInstructions']}}</p>
     <p> <a id="video" v-bind:href="meals.meals[0]['strYoutube']">Watch Video</a></p>

<form>
    <button v-on:click.prevent="previousComic(meals.meals[0]['idMeal'])">Previous</button>
    <button v-on:click.prevent="nextComic(meals.meals[0]['idMeal'])">Next</button>
    <div v-if="user">
    <button v-on:click.prevent="saveMeal(meals)">Save</button>
    </div>
    <div v-else>
    <p>If you would like to save it, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</form>
</div>
</template>

<script>
export default {
  name: 'home',
    props: {
    },
    data() {
      return {
      number: Number,
      saveInf: String,
    }
    },
    computed: {
    user() {
      return this.$store.state.user;
    },
    meals() {
     return this.$store.state.meal;
   },
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("meals", this.getRandom(52764, 52966));
  },
    watch: {
    },
    methods: {
        previousComic(num) {
            this.number = num - 1;
            if(this.number < 52764)
            { 
              ++this.number;
              return;
            }
            this.$store.dispatch("meals", this.number); 
        },
        nextComic(num) {
            this.number = num;
            ++ this.number;   
            if(this.number > 52966)
            {
              --this.number;
              return;
            }
            this.$store.dispatch("meals", this.number);
        },
        getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max); 
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
        },
        saveMeal(meals) {
            let mealName = meals.meals[0]['strMeal'];
            let picture = meals.meals[0]['strMealThumb'];
            console.log(name);   
            this.$store.dispatch("save",{saveInf: mealName, picture} );   
        },

    }
}
</script>

<style scoped>
  #mealname{
    color: red;
    font-size:300%;
  }
  P{
    font-size:140%;
    text-align: center;
  }

  form{
    text-align: center;
  }
  h1{
    text-align: center;
  }
</style>
