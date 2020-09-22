<template>
  <div id="app">
    <div class="app-header">
      <Header />
    </div>
    <div class="app-left">
      <LeftMenu />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from 'components/header'
import LeftMenu from 'components/left-menu'
export default {
  name: 'App',
  components: {
    Header,
    LeftMenu
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
  margin-top: 60px;
}
</style>
