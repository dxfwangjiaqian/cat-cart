<template>
  <div class="checkbox">
    <input type="checkbox" v-bind:class="[checked ? 'icon-check-circle-fill' : 'icon-check-circle', 'iconfont']"  :checked="checked" 
    @change="$emit('change', $event.target.checked)"/>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
	.checkbox{
    input{
      color:#999;
      font-size:20px;
      border:0;
      outline:none;
      -webkit-appearance: none;
      background-color: transparent;
    }
   
    .icon-check-circle-fill{color:#f60}

  }
	
</style>
