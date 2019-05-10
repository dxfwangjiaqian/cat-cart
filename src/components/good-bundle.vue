<template>
  <div>
    <div   class="bundle-container"  v-for="shop in shops"  :key="shop.nameId">
      <div class="shop">
        <div class="choose-btn"> 
          <checkbox v-model="shop.allChecked" @change="checked=>checkAll(checked,shop.nameId)" ></checkbox>
        </div>
        <div class="ico">
          <span></span>
        </div>
        <div class="contact">
          <a href="javascript:;">
            <p class="title">{{shop.name}}</p>
            <span class="iconfont icon-right"></span>
          </a>
        </div>
        <div class="operate">
          <div>
            <a href="javascript:;">领券</a>
          </div>
          <div>
            <a href="javascript:;" class="edit">编辑</a>
          </div>
        </div>
      </div>
      <div class="good-unit" >
        <goodUnit   :goodsData="shop.goods"  :pId="shop.nameId"></goodUnit>
      </div>    
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/checkbox"
import goodUnit from "@/components/good-unit"
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'goodBundle',
  components:{
    checkbox,
    goodUnit
  },
  data () {
    return {
      
    }
  },
  // props:["boundleData"],
  computed:{
    ...mapGetters(
            ["findPosition"]
        ),
    shops(){
      return this.$store.state.goodsList;
    }
  },
  methods:{
    ...mapMutations(
            ["setShopCheckAll"]
        ),
    
    checkAll(data,id){
      var index = this.findPosition(id)
      var obj = {};
      obj.index = index;
      obj.data = data;
      this.setShopCheckAll(obj);
    },
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  $base:75;
	.bundle-container{
    margin-top:.32rem;
    background-color:#fff;
    .shop{
      position:relative;
      height:1.067rem;
      display: flex;
      div{
         height:1.067rem;
         display: flex;
        align-items:center;

      }
      
      //针对checkbox的样式 
      .checkbox{
     
        label:after{
          content:'';
          position: absolute;
          display: inline-block;
          width: 1.6rem;
          height: 100%;
          top: 0;
          left:0;
          cursor: pointer;
        }
      }
      .choose-btn{
        margin-left:.32rem;
        width: .533rem;
      }
      .ico{
        display: flex;
        align-items:center;
        margin-left:.32rem;
        span{
          display: inline-block;
          width: .427rem;
          height: .427rem;
          background-image:url("../assets/images/tianmao.png");
          background-repeat:no-repeat;
          background-size:contain;
        }
      }
      .contact{
        flex:1;
        margin-left: .32rem;

        a{
          width: 100%;
          box-sizing:border-box;
          display: flex;
          align-items:center;
          padding-right: .32rem;
         
        }
        .title{
          margin:0;
          margin-right: .32rem;
          line-height: .347rem;
          text-align: left;
          overflow: hidden;
          word-break: break-all;

          -webkit-line-clamp: 1;
          -moz-line-clamp: 1;
          -ms-line-clamp: 1;
          -o-line-clamp: 1;
          line-clamp: 1;
          -webkit-box-orient: vertical;
          -ms-box-orient: vertical;
          -o-box-orient: vertical;
          box-orient: vertical;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-box;
          display: -o-box;
          display: box;
        }
        .iconfont{
          flex:1;
          color:#999;
        }

      }
      .operate{
        display: flex;
        margin-left: .32rem;
        div{
          flex:1;
          a{
            display: block;
            width: 1.28rem;
            text-align: center;
            &.edit{
              border-left: .01333rem solid #e7e7e7;
            }
          }
        }
       
      }
      
    }
  }
	
</style>
