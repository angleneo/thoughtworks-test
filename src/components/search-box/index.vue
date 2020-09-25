<template>
  <div class="search-box-template">
    <div class="search-input">
      <input v-model="keyword" type="text" />
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box-template {
  width: 100%;
  .search-input {
    position: relative;
    width: 100%;
    height: 50px;
    color: #2d4054;
    input {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      padding-right: 5px;
      box-sizing: border-box;
      width: 70%;
      height: 30px;
      text-indent: 35px;
      background: #efefef;
      border: none;
      outline: none;
      &:active,
      &:hover {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
    i {
      z-index: 2;
      position: absolute;
      left: 0;
      top: 50%;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      transform: translate(0, -50%);
      font-size: 20px;
      background: #efefef;
    }
  }
}
</style>