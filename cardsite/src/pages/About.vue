<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <div class="skills">
        <h1>Skills</h1>
        <ul>
          <li>Java</li>
          <li>C#, Entity Framework</li>
          <li>JavaScript, Vue.js</li>
          <li>SQL, PL/SQL, Transact-SQL</li>
          <li>REST API</li>
        </ul>
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
    <my-footer></my-footer>
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


.content div h1, .content div h2, .content div li {
  position: relative;
  color: black;
}

</style>