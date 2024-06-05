<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="header">
      <h1>List of my projects</h1>
    </div>
    <div class="content">
      <div class="project" @click="showModal = true">
        <h1>Hoteru</h1>
        <p>Here you can see my project.
          This is an application I wrote for my engineering work.</p>
      </div>
      <a href="https://github.com/Yamete11">See more projects...</a>
    </div>
    <ProjectModal :project="project" :show-modal="showModal" @close="showModal = false" />
  </div>
</template>

<script>


import ProjectModal from "@/components/UI/ProjectModal";

export default {
  name: "ProjectPage",
  components: {
    ProjectModal
  },
  data() {
    return {
      project: {
        title: "Hoteru",
        description: "Here you can see my project. This is an application I wrote for my engineering work."
      },
      showModal: false
    };
  }
}
</script>

<style scoped>
.content-main{
  display: flex;
  flex-direction: column;
  background-color: #171717;
  height: 92vh;
  padding-top: 8vh;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  margin-top: 5vh;
  color: white;
  width: 100%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

.project{
  border: white 1px solid;
  border-radius: 10px;
  padding: 50px;
  color: white;
  margin-bottom: 20vh;
}

a{
  text-decoration: none;
  color: white;
  font-size: 20px;
  opacity: 0.5;
  transition: opacity 0.5s ease;
}

a:hover{
  opacity: 1;
}
</style>
