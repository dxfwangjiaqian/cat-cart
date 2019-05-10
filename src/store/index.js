import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex);
export const store= new Vuex.Store({
	state:{
		goodsList:localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): [] ,
		dataList:[] ,
		totalCheck:false ,
	},
	getters:{
        goodsNumber:state=>{
            return state.goodsList.length
        },
         /*
	     *根据id，获取当前的店铺;
	     */
	    findPosition:(state)=>(id)=>{
	      return state.goodsList.findIndex(shop=>{
	        return shop.nameId == id
	      })
	    },
	    /*
	     *根据id，获取当前的商品;
	     */
	    findGoodPosition:(state)=>(index,id)=>{
	      return state.goodsList[index].goods.findIndex(good=>{
	        return good.id == id
	      })
	    },
	    /*
        *计算总价
        */
        getTotal:(state)=>{
			var total = 0.00;
          	state.goodsList.forEach(function(shop){
          		shop.goods.forEach(function(good){
	              	if(good.checked){
	                	total += good.num * good.price
	              	}
	            })  	
        	})
        	total = total.toFixed(2);
        	return total;
        },
        /*
        *计算购物车选中商品的数量
        */
        getNums:(state)=>{
			var nums = 0;
          	state.goodsList.forEach(function(shop){
          		shop.goods.forEach(function(good){
	              	if(good.checked){
	                	nums += good.num ;
	              	}
	            })
        	})
        	return nums;
        },
       /*
        *计算购物车商品的数量
        */
        getAllNums:(state)=>{
			var allnums = 0;
          	state.goodsList.forEach(function(shop){
          		shop.goods.forEach(function(good){
	          	   allnums += good.num ;
	          	})
        	})

        	return allnums;
        },
    },
	mutations:{
		addgoodsList:(state,data)=>{
            state.goodsList = data;
        },
        adddataList:(state,data)=>{
            state.dataList = data;                      
        },
       	/*
       	 *加入购物车
       	 */
       	add:(state,obj)=>{
       		state.dataList.forEach(function(data){
       			if(data.id == obj.id){
       				var bool=true;
   					state.goodsList.forEach(function(shops){
	       				if( shops.nameId == obj.pId && shops.nameId ){//如果是已有的店铺
	       					bool=false;
	       					shops.goods.forEach(function(good){
	       						if(good.id == data.id){//如果是同一个商品
	       							good.num +=1;
		       					}else{//如果不是同一个商品
		       						var goopTemp={};
									goopTemp.id = data.id;
				       				goopTemp.url = data.url;
				       				goopTemp.title = data.title;
				       				goopTemp.price = data.price;
				       				goopTemp.num = 1;
				       				goopTemp.checked = false;
				       				shops.goods.push(goopTemp);
		       					}
	       					})
	       					
	       				}
		       		})
		       		if(bool){
		       			var shops={};
       					var good={};
		       			good.id = data.id;
	       				good.url = data.url;
	       				good.title = data.title;
	       				good.price = data.price;
	       				good.num = 1;
	       				good.checked = false;

		       			shops.name = data.name;
		       			shops.nameId = data.nameId;
		       			shops.allChecked = false;
		       			shops.goods =[];
		       			shops.goods.push(good)
		       		    state.goodsList.push(shops);
		       		}
		       		
       			}
       		})
       		localStorage.setItem("goodsList",JSON.stringify(state.goodsList));    
       	},
		

        /*
         *同步购物车全选的状态
         */
        setTotalCheck:(state,data)=>{
        	state.totalCheck = data;
        },

        /*
         *点击购物车全选的checkbox
         *data为选中，还是未选中
         */
        setCheckAll:(state,data)=>{
        	state.goodsList.forEach(function(shop){
        	  shop.allChecked=data;
	          shop.goods.forEach(function(good){
	            good.checked= shop.allChecked;
	          })
	        })
        },
         /*
         *点击店铺总计的chebox
         *index为当前的店铺
         *data为选中，还是未选中
         */
        setShopCheckAll:(state,obj)=>{
        	state.goodsList[obj.index].allChecked = obj.data;
        	state.goodsList[obj.index].goods.forEach(function(good){
	            good.checked = state.goodsList[obj.index].allChecked;
	        })
	        var isAll = state.goodsList.every(function(shop){
	            return shop.allChecked == obj.data;
	        })

	        state.totalCheck = isAll ? obj.data : false;
        },
        /*
         *点击商品的chebox
         *index为当前的商品
         *data为选中，还是未选中
         */
        setGoodCheck:(state,obj)=>{
        	var isAll = state.goodsList[obj.pIndex].goods.every(function(good){
	            return good.checked == obj.data;
	        })
	        state.goodsList[obj.pIndex].allChecked = isAll ? obj.data : false;
	        	
        },
        

	},
	actions:{
		getList(store) {
	      Axios.get('http://localhost:8080/static/list.json').then((res) => {
	          store.commit('adddataList', res.data)
	          
	      })
	    },
	    getgoodsList(store) {
	      Axios.get('http://localhost:8080/static/cartlist.json').then((res) => {
	      	var getboundles=(list)=>{
			        function find(list, elem) {
					  for (var i = 0; i < list.length; i++) {
					    var flag = -1;
					    var current = list[i];
					    if(elem.nameId==current.nameId&&elem.id==current.id){
					       flag = i;
					       break;
					    }
					  }
					  return flag;
					}

		        	  var bundles=[];
		        	  var goodsList=[].concat(list);
		        	  var tempList=[].concat(goodsList);
			          for(var i=0;i<goodsList.length;i++){
			            var el=goodsList[i];
			            
			            var temp=[];
			            temp.push(goodsList.slice(i,i+1)[0]);
			            for(var j=1;j<tempList.length;j++){
			                if(el.nameId==tempList[j].nameId){
			                   if(el.id!==tempList[j].id){
			                     temp.push(tempList.slice(j,j+1)[0])
			                     
			                     var index= find(goodsList,tempList.slice(j,j+1)[0])
			                     goodsList.splice(index,1)
			                   }
			                  
			                }
			            }
			            bundles.push(temp)
			          }
			         
			        return bundles;
			    };
		    var data = getboundles(res.data);
            store.commit('addgoodsList', data)
	          
	      })
	    }
	}
})