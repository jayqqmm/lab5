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
   </div>
</template>

<script>
export default {
  computed: {
    meals() {
      return this.$store.state.meals;
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
  h1{
    text-align: center;
  }
</style>
