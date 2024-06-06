<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components:{

  }
}
</script>

<style>
body, html{
  background-color: #171717;
  margin: 0;
  padding: 0;
  height: 100%;
}
h1, h2, p, li{
  color: #FFFFFF;
}

li{
  font-size: 20px;
}
</style>
