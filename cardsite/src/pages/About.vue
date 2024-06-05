<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <div class="skills">
        <h1>Skills</h1>
        <h2>Java</h2>
        <h2>C#, Entity Framework</h2>
        <h2>JavaScript, Vue.js</h2>
        <h2>SQL, PL/SQL, Transact-SQL</h2>
        <h2>REST API</h2>
      </div>
      <div class="education">
        <h1>Education:</h1>
        <div class="first-edu">
          <h1>University of Social Sciences, Warsaw</h1>
          <h2>Bachelor in English philology</h2>
        </div>
        <div class="second-edu">
          <h1>Polish-Japanese Academy of Information
            Technology, Warsaw</h1>
          <h2>Computer Science, Databases</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  components: {}
}
</script>

<style scoped>
.content-main{
  display: flex;
  background-color: #171717;
  height: 92vh;
  padding-top: 8vh;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
}
</style>