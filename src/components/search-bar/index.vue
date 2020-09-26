<template>
  <div class="search-bar-template">
    <ul>
      <li
        v-for="(item, index) in barList"
        :key="index"
        :class="['click_active', activeBar === index ? 'active' : '']"
        @click="setActive(index)"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barList: [
        { type: 0, value: 'All' },
        { type: 1, value: 'Physical' },
        { type: 2, value: 'Virtual' },
      ],
      activeBar: 0,
    }
  },
  methods: {
    setActive(index) {
      this.activeBar = index
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  color: #00b4cf;
  border-bottom: 2px solid #00b4cf;
}
.search-bar-template {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      padding-bottom: 2px;
      box-sizing: border-box;
      flex: 1;
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 12px;
      text-align: center;
      border-right: 1px solid lightgray;
      &:hover {
        color: #00b4cf;
        border-bottom: 2px solid #00b4cf;
      }
    }
  }
}
</style>