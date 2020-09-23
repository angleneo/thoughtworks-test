<template>
  <div class="header-template">
    <div class="header-content">
      <h1 class="header-title">
        <SvgLogo />
      </h1>
    </div>
    <div class="header-logo">
      <Avatar />
    </div>
  </div>
</template>

<script>
import SvgLogo from './svg'
import Avatar from 'components/avatar/index'
export default {
  components: {
    SvgLogo,
    Avatar
  }
}
</script>

<style lang="scss" scoped>
.header-template {
  padding: 0 10%;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  .header-content {
    width: 100%;
    display: flex;
    align-items: center;
    .header-title {
      margin: 0 auto;
      width: 100px;
      height: 40px;
    }
  }
  .header-logo {
    min-width: 100px;
  }
}
</style>