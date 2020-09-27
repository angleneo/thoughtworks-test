<template>
  <div class="data-label-template">
    <div class="data-item">
      <div class="item-label">ALL</div>
      <div class="item-count">8</div>
    </div>
    <div class="data-item">
      <div class="item-label">PHYSICAL</div>
      <div class="item-count">4</div>
    </div>
    <div class="data-item">
      <div class="item-label">VIRTUAL</div>
      <div class="item-count">4</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<style lang="scss" scoped>
.data-label-template {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 210px;
  height: 140px;
  background: #ffffff;
  overflow: hidden;
  text-align: center;
  .data-item {
    flex: 1;
    .item-label {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-size: 12px;
      color: #2d4054;
    }
    .item-count {
      width: 100%;
      height: 80px;
      line-height: 80px;
      font-size: 20px;
      color:#000000;
    }
  }
}
</style>