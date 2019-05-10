<template>
 	<div class="body" id="body">
      <div class="detail-header">
        <div class="header-flex">
          <div class="iconfont icon-left" @click="$router.back()"></div>
          <ul class="header-nav" >
            <li v-for='(value,index) in navArr' :key="index"  :class="{active : activeBtn == index}" @click="goAnchor('#anchor-'+index,index)">{{value}}</li>
          </ul>
           <router-link class="iconfont icon-gouwu" tag='div' :to='{path:"/car"}'>
              <span class="up-num">{{getAllNums}}</span>
           </router-link>
         </div>
      </div>
      <div class="content">
        <div id="anchor-0">
          <div class="group-warp" >
            <!-- 轮播 -->
            <Carousel  :itemUrls="imgUrls" :options="swiperOption" ></Carousel>
              
            <modGener :generItem="gooddata"></modGener>
          </div>
          <div class="group-warp" >
            <modDiscount></modDiscount>
            <modPromotion></modPromotion>
            <modService></modService>
          </div>

          <div class="group-warp" >  
            <modChoose></modChoose>
            <modProps></modProps>
          </div>

        </div>
        
        <div id="anchor-1">
          <div class="group-warp">  
            <modComments></modComments>
            <modAskall></modAskall>
          </div>
          <div class="group-warp">  
            <modShop :shopItem="gooddata"></modShop>
          </div>
        </div>
        <div id="anchor-2">
          <div class="group-warp">  
            <modDetail></modDetail>
          </div>
        </div>
      </div>   
 
     <detailFooter :id="id" :pId="pId"></detailFooter>
 	</div>
</template>

<script>
import Carousel from "@/components/carousel"
import detailFooter from "@/components/detail-footer"



import modComments from "@/modules/mod-comments"
import modAskall from "@/modules/mod-askall"
import modChoose from "@/modules/mod-choose"
import modService from "@/modules/mod-service"
import modProps from "@/modules/mod-props"
import modShop from "@/modules/mod-shop"
import modPromotion from "@/modules/mod-promotion"
import modDiscount from "@/modules/mod-discount"
import modGener from "@/modules/mod-gener"
import modDetail from "@/modules/mod-detail"

export default {
  name: 'Detail',
  components:{
    Carousel,
    modComments,
    modAskall,
    modChoose,
    modService,
    modProps,
    modShop,
    modPromotion,
    modDiscount,
    modGener,
    modDetail,
    detailFooter
  },
  data () {
    return {
      swiperOption:{
            loop: true,
            paginationType:'fraction',
            pagination:'.swiper-pagination'
      },
      imgUrls:'',
      gooddata:'',
      pId:0,
      activeBtn:0,
      navArr:['商品','评价','详情']
    }
  },
 
  computed:{
      id(){
            return this.$route.params && this.$route.params.id;
      },
      dataList(){
            return this.$store.state.dataList;
      },
      getAllNums(){
        return this.$store.getters.getAllNums;
      },
  },
  methods:{
      getInfo(){
            this.dataList.forEach((item)=>{
                if(item.id == this.id){
                    this.imgUrls = item.imagesURL
                    this.pId = item.nameId
                    this.gooddata = item;
                }             
            })
      },
      goAnchor(selector,index){

        this.activeBtn = index;
        var anchorLocation=this.$el.querySelector(selector).offsetTop;
        var scroll=document.querySelector("#body");

       
        scroll.scrollTop = this.activeBtn>0?(anchorLocation-44):anchorLocation;
      },
      init(){
        this.getInfo();
        this.activeBtn==0;
        document.querySelector("#body").scrollTop=0;
      }

  },
  mounted(){
    this.init();
    
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  $base:75;
  #body{
    overflow:auto; 
    height:100%;
    padding-bottom:60rem/$base;
  }
  .content{overflow:hidden;}
  
  /*头部*/

  .detail-header{
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    width:100%;

    .header-flex{
      display: flex;
      height:88rem/$base;
      line-height:88rem/$base;
      text-align:center;
      font-size:14px;
      color:#999;
      background-color:#fff;
      box-shadow:0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);

      .header-nav{
        display:flex;
        flex:1 1 auto;
        margin:0 8%;

        li{
          flex:1;
          border-bottom:2px solid #fff;
          &.active{
            color:#00d8a0;
            border-bottom:2px solid #00d8a0;
          }
        }
      }

      .iconfont{
        width:90rem/$base;
        flex:0 0 auto;
        font-size:24px;

        &.icon-gouwu{
          font-size:22px;
          position:relative;
          .up-num{
            position:absolute;
            background-color:#FF0036;
            border:1px solid #fff;
            color:#fff;
            font-size:12px;
            text-align:center;
            padding:0 3px;
            line-height:15px;
            height:15px;
            border-radius:15px;
            right:4px;
            top:5px;
            transform: scale(.8);
          }
        }
      }
    }
  }


  /*内容主体的每一个组的margin-bottom为大约20px*/
  .group-warp{
    margin-bottom:0.26rem;
  }

 

  
 

  



 
</style>
