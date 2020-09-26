<template>
  <div class="servers-list-template">
    <ul>
      <li class="servers-list-item" v-for="(item, index) in dataList" :key="index">
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
            <div class="btn"><i class="icon-plus"></i></div>
            <div class="keyword-list">
              <ul>
                <li class="keyword-item" v-for="(keyword, int) in item.resources" :key="int">
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
  </div>
</template>

<script>
export default {
  props: {
    serversData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data(){
    return {
      dataList: []
    }
  },
  watch: {
    serversData: {
      handler: function(val, oldVal){
        if (val !== oldVal) {
          this.dataList = this.serversData
          console.log(this.dataList)
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
          i {
            display: inline-block;
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            vertical-align: middle;
          }
        }
        .keyword-list {
          width: 80%;
          ul {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
          }
          .keyword-item {
            margin: 0 5px;
            .btn-cancel {
              i {
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