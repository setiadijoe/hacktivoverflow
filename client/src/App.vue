<template>
  <div id="app">
    <NavBar></NavBar>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
