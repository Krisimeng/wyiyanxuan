<template>
  <div id="home">
      <nav class="footerlink">
        <router-link to="/goods">
          <span class="iconfont icon-icon_home"></span>
          <h3>首页</h3>
        </router-link>
        <router-link to="/category">
          <span class="iconfont icon-hest_of_drawers"></span>
          <h3>分类</h3>
        </router-link>
        <router-link to="/truthy">
          <span class="iconfont icon-img"></span>
          <h3>值得买</h3>
        </router-link>
        <router-link to="/mycart">
          <span class="iconfont icon-cart"></span>
           <h3>购物车</h3>
        </router-link>
        <router-link to="/user">
          <span class="iconfont icon-user"></span>
          <h3>个人</h3>
        </router-link>
      </nav>
      <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footerlink{
  width:100%;
  height:49px;
  position:absolute;
  bottom:0;
  left:0;
  border-top:1px solid #ddd;
  display:flex;
  justify-content:space-around;
  align-items:center;
  text-align:center;
  color:#ccc;
  box-sizing:border-box;
  .iconfont{
    font-size:20px;
    line-height:20px;
  }
  h3{
    color:#333;
    font-size:12px;
    line-height:24px;
  }
}
</style>