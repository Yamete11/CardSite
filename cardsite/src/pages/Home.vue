<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <div>
        <h1>Hi there, I'm a web developer</h1>
      </div>
      <div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </h1>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>

export default {
  name: "HomePage",

};
</script>

<style scoped>
.content-main {
  display: flex;
  flex-direction: column;
  background-color: white;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60%;
  overflow: hidden;
  border-radius: 20px;
  background-color: white;
  padding: 20px;
}

.content div h1 {
  position: relative;
  color: black;
  z-index: 2

}

.content div::before {
  content: '';
  position: absolute;
  width: 300px;
  height: 500%;
  background-color: black;
  box-shadow: 0 0 20px rgb(8, 8, 8);
  animation: animate 7s linear infinite;
  z-index: 1
}

.content div::after {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 16px;
  background-color: white;
  z-index: 1;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
