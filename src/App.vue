<script lang="ts">
import ToDoCard from "./components/ToDoCard.vue";

export default {
  name: "App",
  components: {
    ToDoCard,
  },
};
</script>


<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/HelloWorld">YOLO</router-link>
    </div>
    <ToDoCard />
    <div></div>
  </div>
</template>







<style>
body {
  background-color: #ffd953;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
