<template>
 	 <div class="foot-nav-containner">
        <ul class="bottom-nav">
            <router-link tag="li" :to='{name:"index"}' class="iconfont icon-shouye"><div>首页</div></router-link>
            <router-link tag="li" :to='{name:"car"}' class="iconfont icon-gouwu"><div>购物车</div></router-link>
        </ul>
     </div>
</template>

<script>
export default {
  name: 'footNav',
  data () {
    return {
      msg: 'foot'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    .foot-nav-containner .iconfont{ 
      font-size: 20px;
    }
   .foot-nav-containner .bottom-nav{
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      height: 100%;
      list-style: none;
      border-top:1px solid #dfdada;

   }
   .foot-nav-containner .bottom-nav .router-link-active.router-link-exact-active{
      color:#00d8a0;
   }
   .foot-nav-containner .bottom-nav li{
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
   .foot-nav-containner .bottom-nav li div{
      font-size:12px;
      flex: 0 0 auto;
   }
    
</style>
