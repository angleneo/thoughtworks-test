<template>
  <div class="search-action-template">
    <div class="search-action-box">
      <div :class="['icon-th-card search-action-box-item click_active', activeAction === 0 ? 'active':'']" @click="setAction(0)"></div>
      <div :class="['icon-th-list search-action-box-item click_active', activeAction === 1 ? 'active': '']" @click="setAction(1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeAction: 0
    }
  },
  methods: {
    setAction(index){
      this.activeAction = index
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.active {
  color: #00b4cf;
}
.search-action-template {
  width: 100%;
  height: 100%;
  @extend .flex;
  .search-action-box {
    @extend .flex;
    .search-action-box-item {
      margin: 0 10px;
      display: inline-block;
      font-size: 20px;
      &:hover {
        @extend .active;
      }
    }
  }
}
</style>