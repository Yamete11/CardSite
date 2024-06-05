<template>
  <div class="links">
    <a href="https://github.com/Yamete11">
      <img src="../../assets/1220369_github_git_hub_icon.png" alt="GitHub">
    </a>
    <a href="https://www.facebook.com/gleb.ivanov.779/">
      <img src="../../assets/367581_facebook_social_icon.png" alt="Facebook">
    </a>
    <a href="https://www.linkedin.com/in/hlib-ivanov-956856249/">
      <img src="../../assets/1646907_linkedin_social_icon.png" alt="LinkedIn">
    </a>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>
.links {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px;
}

.links a {
  margin-right: 10px; }

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
