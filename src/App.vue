<template>
  <div id="app">
    <tab-header></tab-header>
    <router-view></router-view>
    <tab-footer></tab-footer>
  </div>
</template>

<script>
import TabHeader from './components/TabHeader.vue'
import TabFooter from './components/TabFooter.vue'

export default {
  name: 'App',
  components: {
    TabHeader,
    TabFooter
  }
}
</script>

<style>
html,body{
  padding:0; 
  margin:0;
  background-color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  margin:0; padding:0;
}
router-view {
  min-height: 600px
}
a {
  color : #ffff !important;
}
</style>
