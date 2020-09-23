<template>
  <div class="avatar-template">
    <div class="avatar">
      <img src="../../assets/images/windows.png" alt="avatar" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avatar-template {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid gray;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>