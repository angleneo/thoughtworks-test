<template>
  <div class="left-menu-template">
    <div class="link-list">
      <ul>
        <li v-for="(item, index) in linkList" :key="index">
          <router-link :to="item.href" :class="item.isCheck ? 'click_active':''">
            <span :class="item.icon"></span>
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        { icon: 'icon-dashboard', href: '/', name: 'DASHBOARD', isCheck: false },
        { icon: 'icon-sitemap', href: '/', name: 'AGENT', isCheck: true },
        { icon: 'icon-boat', href: '/myCruise', name: 'My Cruise', isCheck: true },
        { icon: 'icon-life-bouy', href: '/help', name: 'HELP', isCheck: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: cruise;
  src: url('../../assets/font/cruise.ttf');
}
.left-menu-template {
  width: 100%;
  background: #2d4054;
  .link-list {
    width: 100%;
    ul > li {
      width: 100%;
      a {
        font-family: cruise;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 45px;
        font-size: 14px;
        color: #ffffff;
        span {
          margin-right: 15px;
          display: inline-block;
          font-size: 20px;
        }
        &:hover {
          color: #00b4cf;
          text-decoration: none;
        }
      }
    }
  }
}
</style>