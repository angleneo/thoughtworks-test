<template>
  <div class="dialog-template">
    <div class="dialog-model" @click="onClosed"></div>
    <div class="dialog-box">
      <div class="dialog-triangle"></div>
      <div class="dialog-content box">
        <div class="close click_active" @click="onClosed"><i class="icon-close"></i></div>
        <div class="dialog-title">
          Separate multiple resource name with commas
        </div>
        <div class="dialog-input">
          <input v-model="keyword" type="text" />
        </div>
        <div class="operation">
          <div class="btn" @click="addKeyword">Add Resources</div>
          <div class="btn-normal" @click="onClosed">Cancel</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    addKeyword() {
      let arr = this.keyword.split(',')
      this.$emit('get-keywords', arr)
      this.onClosed()
    },
    onClosed() {
      this.keyword = ''
      this.$emit('on-closed')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-template {
  .dialog-model {
    z-index:1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-box {
    position: relative;
    .dialog-triangle:before {
      z-index: 1002;
      content: '';
      position: absolute;
      top: 4px;
      left: 6px;
      border-width: 0 8px 17px 8px;
      border-style: solid;
      border-color: transparent transparent #00b4cf;
    }
    .dialog-triangle:after {
      z-index: 1002;
      content: '';
      position: absolute;
      top: 5px;
      left: 6px;
      border-width: 0 8px 17px 8px;
      border-style: solid;
      border-color: transparent transparent #fff;
    }
    .dialog-content {
      z-index:1001;
      padding: 10px 15px;
      box-sizing: border-box;
      position: absolute;
      top: 20px;
      left: -15px;
      width: 570px;
      background: #ffffff;
      border: 1px solid #00b4cf;
      .close {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        color: #00b4cf;
        .icon-close {
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          font-size: 20px;
        }
      }
      .dialog-title {
        width: 100%;
      }
      .dialog-input {
        margin: 15px 0;
        width: 100%;
        input {
          width: 100%;
          height: 30px;
          text-indent: 10px;
          border-radius: 4px;
          border: 1px solid #2d4054;
          outline: none;
        }
      }
      .operation {
        margin: 10px 0;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .btn-normal {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>