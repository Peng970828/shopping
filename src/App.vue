<template>
  <div id="app">

    <keep-alive include="Home">
      <router-view/>
    </keep-alive>


    <tab-bar-main>

    </tab-bar-main>

  </div>
</template>

<script>
  import TabBarMain from './components/tabbar/TabBarMain'
  export default {
    name:'APP',
    components:{
      TabBarMain
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
