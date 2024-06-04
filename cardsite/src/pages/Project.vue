<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <h1>Hoteru</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  components: {}

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
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
</style>