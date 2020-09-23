<template>
  <div class="left-menu-template">
    <div class="link-list">
      <ul>
        <li v-for="(item, index) in linkList" :key="index" @click="onSelectView(index)">
          <router-link
            :to="item.href"
            :class="onSelected === index && onSelected !== 0 ? 'isSelected':'isDisabled'"
          >
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
        {
          icon: 'icon-dashboard',
          href: '/',
          name: 'DASHBOARD',
        },
        { icon: 'icon-sitemap', href: '/', name: 'AGENT' },
        {
          icon: 'icon-boat',
          href: '/myCruise',
          name: 'My Cruise',
        },
        { icon: 'icon-life-bouy', href: '/help', name: 'HELP' },
      ],
      onSelected: 1,
    }
  },
  methods: {
    onSelectView(index = 1) {
      this.onSelected = index
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: cruise;
  src: url('../../assets/font/cruise.ttf');
}
.left-menu-template {
  position: relative;
  width: 100%;
  height: 100%;
  background: #2d4054;
  .link-list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    ul > li {
      margin: 10px 0;
      width: 100%;
      .isSelected {
        color: #00b4cf;
        text-decoration: none;
        background: #435466;
      }
      a {
        font-family: cruise;
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 45px;
        font-size: 14px;
        font-weight: 200;
        color: #ffffff;
        span {
          margin-right: 18px;
          display: inline-block;
          font-size: 18px;
        }
        &:hover {
          @extend .isSelected;
        }
      }
    }
  }
}
</style>