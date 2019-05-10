 <template>
 	<div class="container">
 		<List :dataList="dataList" ></List>
 	</div>
</template>

<script>
import List from "@/components/list"

export default {
  name: 'Index',
  components:{List},
  data () {
    return { 
    }
  },
  created(){
    
  },
  computed: {
    dataList(){
      return this.$store.state.dataList;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.container{

	}
	
</style>
