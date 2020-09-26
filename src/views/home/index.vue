<template>
  <div class="home-template">
    <div class="home-top">
      <div class="top-item"><DataCard /></div>
      <div class="top-item"><DataCard /></div>
      <div class="top-item"><DataLabel /></div>
    </div>
    <div class="filter-column">
      <div class="filter-item-bar"><SearchBar /></div>
      <div class="filter-item-input"><SearchBox /></div>
      <div class="filter-item-input"><SearchAction /></div>
    </div>
    <div class="servers-list"><ServersList :serversData="serversData" /></div>
  </div>
</template>

<script>
import DataCard from 'components/data-card'
import DataLabel from 'components/data-label'
import SearchBar from 'components/search-bar'
import SearchBox from 'components/search-box'
import SearchAction from 'components/search-action'
import ServersList from 'components/servers-list'
import { getAentsData } from 'service/home'
export default {
  components: {
    DataCard,
    DataLabel,
    SearchBar,
    SearchBox,
    SearchAction,
    ServersList
  },
  data(){
    return {
      serversData: []
    }
  },
  mounted(){
    this.getAents()
  },
  methods: {
    getAents(){
      getAentsData().then(res => {
        if (res && res.status === 200) {
          this.serversData = res.data || []
        }
      })
    }
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
      flex: 1;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .filter-column {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 15px 0;
    width: 100%;
    background: #ffffff;
    .filter-item-bar {
      min-width: 210px;
      flex: 1;
      margin-right: 20px;
    }
    .filter-item-input {
      min-width: 210px;
      flex: 1;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .servers-list {
    width: 100%;
    background: pink;
  }
}
</style>