<template>
  <div class="content-main">
    <my-navbar></my-navbar>
    <div class="content">
      <h1>List of contacts</h1>
      <a href="https://github.com/Yamete11">
        <img src="../assets/1220369_github_git_hub_icon.png" alt="GitHub">
      </a>
      <a href="https://www.facebook.com/gleb.ivanov.779/">
        <img src="../assets/367581_facebook_social_icon.png" alt="Facebook">
      </a>
      <a href="https://www.linkedin.com/in/hlib-ivanov-956856249/">
        <img src="../assets/1646907_linkedin_social_icon.png" alt="LinkedIn">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage"
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
  flex-direction: column;
  flex-grow: 1;
}

img {
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

img:hover {
  opacity: 1;
}
</style>