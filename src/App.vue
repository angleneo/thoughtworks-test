<template>
  <div id="app">
    <div class="app-header">
      <Header />
    </div>
    <div class="content">
      <aside class="content-left-menu">
        <LeftMenu />
      </aside>
      <div class="content-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header'
import LeftMenu from 'components/left-menu'
export default {
  name: 'App',
  components: {
    Header,
    LeftMenu,
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
}
#app {
  position: relative;
}
.app-header {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.content {
  z-index: 1;
  position: absolute;
  top: 70px;
  left: 0;
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
