<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <div>
        <h1>Hi there, I'm a web developer</h1>
      </div>
      <div>
        <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </h1>
      </div>
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
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}

.content div {
  width: 30%
}
</style>