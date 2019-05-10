<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Home from '@/pages/home'
 
  export default {
    name: 'App',
    components:{
      Home
    }
   
  }
</script>
<style>
  /* */
  @import 'http://at.alicdn.com/t/font_1098278_fx9ugkrqn7p.css'
</style>
<style   type="text/css" >
  html,body,#app{
    font-size:12px;
    margin: 0;
    padding: 0;
    width: 100%;
    background: #f8f8f8;
    height:100%;
    height:100%;
    font-family: "Helvetica Neue";
    overflow: hidden;
  }
  ul{
    margin:0;
    padding:0;
    list-style: none;
  }
  .left{
    float:left;
  }
  .right{
    float:right;
  }
  input, textarea, select, button {
    font: 400 13.3333px Helvetica Neue;
  }
</style>
