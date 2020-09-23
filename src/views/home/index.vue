<template>
  <div class="home-template">
    <div class="home-top">
      <div class="top-item"><DataCard /></div>
      <div class="top-item"><DataCard /></div>
      <div class="top-item"><DataCard /></div>
    </div>
    <div class="filter-column"></div>
    <div class="servers-list"></div>
  </div>
</template>

<script>
import DataCard from 'components/data-card'
export default {
  components: {
    DataCard
  }
}
</script>

<style lang="scss" scoped>
.home-template {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .home-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .top-item {
      flex:1;
      margin: 10px;
    }
  }
  .filter-column {
    width:100%;
    background: green;
  }
  .servers-list {
    width: 100%;
    background: pink;
  }
}
</style>