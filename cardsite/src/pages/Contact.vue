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
      <div class="email-container" @click="showEmail = true">
        <img v-if="!showEmail" src="../assets/9034975_logo_google_icon.png" alt="Google">
        <span v-else>{{ email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      showEmail: false,
      email: "hlib.ivanov11@gmail.com"
    }
  }
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
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20vh;
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

span{
  display: block;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
}
</style>