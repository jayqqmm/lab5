import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    meal: [],
    meals: String,
    
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setMeal(state, meal) {
    state.meal = meal;
  },
    setMeals(state, meals)
  {
    state.meals = meals;
  },
  },
  actions: {
    async meals(context, data) {
      try {
        let response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + data);
        context.commit('setMeal', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getTime(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setTime', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async save(context, data) {
      console.log(data)
      try {
        await axios.post('/api/meals', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getMeals(context) {
      try {
        let response = await axios.get("/api/meals");
        context.commit('setMeals', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async deleteMeal(context, data) {
      console.log(data);
      try{
        let response = await axios.delete("api/meals/" + data);
      }catch (error) {
        return "";
      }
    },
  }
})
