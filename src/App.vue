<template>
  <div id="app">
    <div class="app-header">
      <Header />
    </div>
    <div class="content">
      <div class="content-left-menu">
        <LeftMenu />
      </div>
      <div class="content-main">
        <span class="blue">content</span>
      </div>
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

<style lang="scss" scoped>
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.app-header {
  width: 100%;
}
.content {
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #f3f3f3;
  .content-left-menu {
    width: 20%;
    min-width: 250px;
  }
  .content-main {
    width: 80%;
  }
}
</style>
