<template>
  <div class="home-template">
    <div class="home-top">
      <div class="top-item">
        <DataCard :type="'building'" :num="buildLength" />
      </div>
      <div class="top-item"><DataCard :type="'idle'" :num="idleLength" /></div>
      <div class="top-item"><DataLabel :dataLabel="dataLabel" /></div>
    </div>
    <div class="filter-column">
      <div class="filter-item-bar"><SearchBar /></div>
      <div class="filter-item-input">
        <SearchBox @getKeyword="getKeywodForList" />
      </div>
      <div class="filter-item-input"><SearchAction /></div>
    </div>
    <div class="servers-list">
      <ServersList ref="servers" :serversData="serversData" />
    </div>
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
  data() {
    return {
      initData: [], // 存储初始data
      serversData: [],
      buildLength: 0,
      idleLength: 0,
      dataLabel: {}
    }
  },
  mounted() {
    this.getAents()
  },
  methods: {
    getAents() {
      getAentsData().then(res => {
        if (res && res.status === 200) {
          this.serversData = res.data || []
          this.initData = res.data || []
          let phy = 0, vir = 0
          let len = this.initData.length
          for (let i = 0;i < len;i++) {
            if (this.initData[i].status === 'idle') {
              this.idleLength++
            }
            if (this.initData[i].status === 'building') {
              this.buildLength++
            }
            if (this.initData[i].type === 'physical') {
              phy++
            }
            if (this.initData[i].type === 'virtual') {
              vir++
            }
          }
          this.dataLabel = {
            all: this.initData.length,
            physical: phy,
            virtual: vir
          }
        }
      })
    },
    getKeywodForList(val) {
      let len = this.initData.length
      let arr = this.initData
      this.serversData = []
      let reg = new RegExp(val)
      for (let i = 0;i < len;i++) {
        //如果字符串中不包含目标字符会返回-1
        if (arr[i].name && arr[i].name.match(reg)) {
          this.serversData.push(arr[i])
        }
      }
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
  overflow-y: auto;
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
  }
}
</style>