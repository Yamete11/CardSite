<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <h1>Hi there, I'm a web developer</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomePage",
  components:{},
}
</script>

<style scoped>
.content-main{
  display: flex;
  flex-direction: column;
  background-color: #2C3531;
  height: 92vh;
  padding-top: 8vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>