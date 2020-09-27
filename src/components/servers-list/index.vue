<template>
  <div class="servers-list-template">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        class="servers-list-item"
      >
        <div class="item-logo">
          <img src="../../assets/images/windows.png" alt="server-logo" />
        </div>
        <div class="item-info">
          <div class="item-info-top flex-wrap-center">
            <div class="item-info-top-child flex-align-center blue">
              <i class="icon-desktop"></i>{{ item.name }}
            </div>
            <div class="item-info-top-child idle click_active">idle</div>
            <div class="item-info-top-child flex-align-center">
              <i class="icon-info"></i>{{ item.ip }}
            </div>
            <div class="item-info-top-child flex-align-center">
              <i class="icon-folder"></i>
              {{ item.location }}
            </div>
          </div>
          <div class="item-info-buttom flex-align-center flex-wrap-center">
            <div class="keyword-list">
              <div
                :id="item.name"
                class="btn"
                @click="addTags(item.name, index)"
              >
                <i class="icon-plus"></i>
              </div>
              <ul>
                <li
                  v-for="(keyword, int) in item.resources"
                  :key="int"
                  class="keyword-item"
                >
                  <div class="btn-cancel">
                    {{ keyword }}<i class="icon-trash click_active"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="btn"><i class="icon-deny"></i>Deny</div>
          </div>
        </div>
      </li>
    </ul>
    <Dialog
      v-show="dialogVisible"
      id="dialog"
      ref="dialog"
      @on-closed="dialogVisible = false"
      @get-keywords="getKeywords"
    />
  </div>
</template>

<script>
import Dialog from 'components/dialog'
export default {
  components: {
    Dialog
  },
  props: {
    serversData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      dataList: [],
      dialogVisible: false,
      activeClick: null
    }
  },
  watch: {
    serversData: {
      handler: function(val, oldVal) {
        if (val !== oldVal) {
          this.dataList = this.serversData
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    addTags(id, index) {
      let obj = document.getElementById(id)
      let t = obj.getBoundingClientRect().top //获取元素距离页面上边的距离
      let l = obj.getBoundingClientRect().left //获取元素距离页面左边的距离
      let sh = document.documentElement.scrollTop //网页滚动条滚动的高度

      // let height = obj.offsetHeight; //获取元素高度

      //设置弹框位置
      dialog.style.left = l + 'px'
      dialog.style.top = t + sh - 40 + 'px'
      this.dialogVisible = true
      this.activeClick = index
    },
    getKeywords(val) {
      if (val.length === 0) {
        return
      }
      for (let i = 0;i < val.length;i++) {
        this.dataList[this.activeClick].resources.push(val[i].trim())
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#dialog {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  background: #ffffff;
}
.idle {
  padding: 2px 10px;
  box-sizing: border-box;
  color: #ffffff;
  background: #7fbc39;
}
.build {
  padding: 2px 10px;
  box-sizing: border-box;
  color: #ffffff;
  background: #ff9a2a;
}
.flex-align-center {
  display: flex;
  align-items: center;
}
.flex-wrap-center {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.servers-list-template {
  width: 100%;
  ul > .servers-list-item {
    padding: 15px;
    box-sizing: border-box;
    margin: 15px 0;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background: #ffffff;
    .item-logo {
      display: flex;
      align-items: center;
      // width: 100%;
      font-size: 80px;
      img {
        // width: 50px;
        // height: 50px;
      }
    }
    .item-info {
      flex: 1;
      padding-left: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #2d4054;
      // width:100%;
      .item-info-top {
        width: 100%;
        i {
          font-size: 16px;
          color: #2d4054;
        }
        .item-info-top-child {
          user-select: none;
          .icon-desktop,
          .icon-info,
          .icon-folder {
            margin: 0 10px 0 0;
            color: #e1e4e6;
          }
        }
      }
      .item-info-buttom {
        width: 100%;
        .btn {
          display: inline-block;
          margin: 5px 5px 5px 0;
          i {
            margin-top: -2px;
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            vertical-align: middle;
          }
          .icon-deny {
            margin: -3px 3px 0 0;
          }
        }
        .keyword-list {
          width: 80%;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          ul {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
          .keyword-item {
            margin: 5px;
            .btn-cancel {
              i {
                margin-top: -2.5px;
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>