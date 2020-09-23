<template>
  <div class="data-card-template">
    <div :class="cardType === 'build'? 'build':'Idle'">
      <span :class="cardType === 'build'? 'icon-cog':'icon-coffee'"></span>
      <div class="card-type">{{ cardType === 'build' ? 'Building':'Idle' }}</div>
      <div class="card-data">3</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        cardType: {
            type: String,
            default: 'Idle'
        }
    }
}
</script>

<style lang="scss" scoped>
.data-card-template {
  width: 100%;
  min-width: 210px;
  min-height: 90px;
  color: #ffffff;
  overflow: hidden;
  .card-type {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    font-weight: bold;
    font-size: 18px;
  }
  .card-data {
    padding: 5px 10px;
    box-sizing: border-box;
    width: 100%;
    font-size: 48px;
    text-align: right;
  }
  .build {
    position: relative;
    width: 100%;
    height: 100%;
    background: #ff9a2a;
    span {
      padding: 0;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -25%;
      display: inline-block;
      font-size: 140px;
      opacity: 0.2;
      -webkit-animation: rotateAnimation 2s linear alternate;
      animation: rotateAnimation 2s linear infinite;
    }
    @-webkit-keyframes rotateAnimation {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes rotateAnimation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  .Idle {
    position: relative;
    width: 100%;
    height: 100%;
    background: #7fbc39;
    span {
      padding: 0;
      position: absolute;
      top: -10px;
      left: 50%;
      margin-left: -25%;
      display: inline-block;
      font-size: 144px;
      opacity: 0.2;
    }
  }
}
</style>