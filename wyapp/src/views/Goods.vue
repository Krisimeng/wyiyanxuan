<template>
  <div id="goods">
      <div class="topwrap">
          <div class="topcon">
              <img src="../../public/logo.png" alt="" class="logo">
              <p class="searchipt">
                  <i class="iconfont icon-search"></i>
                  <span>搜索商品, 共30000+款好物</span>
              </p>
              <input type="button" value="登录" class="searchbtn">
          </div>
          <div class="goodmenus" ref="goodsitems">
              <li v-for="item in goodstit" :key="item.id" class="good-item">{{item.name}}</li>
          </div>
        <goodslist/>
      </div>
  </div>
</template>



<script>
import goodslist from '../components/goods/goodslist'
export default {
    // computed:{
    //     states(){
    //         console.log(666);
    //         console.log(this);
    //         console.log(this.$store);
    //         // console.log(this.$storegoods.state.goods.goodsdetails.a);
    //     }
    // }
    components:{
        goodslist,
    },
    created(){
        this.$store.dispatch('goods/requestdata');
    },
    computed: {
        goodstit(){
            return this.$store.state.goods.alldata.alldata;
        }
  },
  mounted(){
      const scroll = new IScroll(this.$refs.goodsitems, {
      tap: true,
      click: true,
    });
    scroll.on('beforeScrollStart', ()=>{
      scroll.refresh();
    });
  }

}
</script>


<style lang="scss" scoped>
.topcon{
    width:100%;
    height:44px;
    padding:5px 10px;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    .logo{
        height:20px;
        width:79px;
        padding-right:9px;
    }
    .searchipt{
        width:221px;
        height:28px;
        background:#ededed;
        border:none;
        border-radius:3px;
        outline:none;
        text-align:center;
        line-height:28px;
        box-sizing:border-box;
        font-size:14px;
        color:#999;
        i{
            padding-right:6px;
            font-size:16px;
        }
        
    }
    .searchbtn{
        width:37px;
        height:20px;
        border:1px solid #dd1a21;
        border-radius:5px;
        color:#dd1a21;
        margin-left:9px;
    }
}
.goodmenus{
    height:30px;
    width:max-content;
    padding:6px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    overflow:hidden;
    .good-item{
        width:25%;
        height:20px;
        padding:6px;
    }
}
</style>