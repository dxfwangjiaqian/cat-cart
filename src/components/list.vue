<template>
  <div>
        <router-link class="list-item" v-for="item in dataList" tag="div" :key="item.id" :to='{path:"/detail/"+item.id}'> 
        	<img :src="getImgUrl(item)" class="item-img">
        	<div class="item-descript">
        		<p class="item-title">{{item.title}}</p>
        		<p class="item-price">￥{{item.price}}</p>
        		<div class="item-line">
        			<span class="item-postage">{{item.Postage}}</span>
        			<span class="item-sales">{{item.SalesVolume}}</span>
        			<span class="item-origin">{{item.PlaceOrigin}}</span>
        		</div>
        	</div>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      
    }
  },
  methods:{
    getImgUrl(item){
      return "static/"+item.url;
    }
  },
  props:["dataList"],
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.list-item {
		display: flex;
		flex-direction: row;
		padding:0.26rem;
		border-bottom :1px solid  #dadada;
            .item-img{
                  width:2.6rem;
                  height:2.6rem;
                  flex: 0 0 auto;
            }
            .item-descript{
                  flex:1 0;
                  padding-left:0.21rem;
                  p{
                        margin: 0.21rem 0;
                        font-size:14px;
                  }
                  .item-title{
                        color:#4a5569;
                        font-weight: bold;
                  }
                  .item-price{
                        color:#ea5114;
                        font-size:16px;
                  }
                  .item-line{
                        display: flex;
                        flex-direction: row;
                        span{
                              flex:1 0 auto;
                              color:#999;
                        }
                        .item-origin{
                              text-align: right;
                        }
                        .item-sales{
                              text-align: center;
                        }
                  }

            }
	}
	
</style>
