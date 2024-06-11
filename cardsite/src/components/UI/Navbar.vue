<template>
  <div class="navbar">
    <div class="navbar-title">
      <h1 @click="goHome()">Help me find a job in IT</h1>
    </div>
    <div class="navbar-links">
      <router-link class="navbar-btn" to="/">Home</router-link>
      <router-link class="navbar-btn" to="/about">About</router-link>
      <router-link class="navbar-btn" to="/project">Projects</router-link>
      <router-link class="navbar-btn" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNavbar",
  methods:{
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #171717;
  color: white;
  height: 8vh;
  box-sizing: border-box;
}

.navbar-links{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
}

.navbar-btn{
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  background-color: #171717;
  cursor: pointer;
  position: relative;
}

.navbar-btn::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 0.175rem;
  left: 0;
  bottom: 0;
  background: white;
  transform: scale(0, 1);
  transition: transform 0.3s ease;
}

.navbar-btn:hover::after{
  transform: scale(1, 1);
}

.navbar-btn.router-link-exact-active::after{
  transform: scale(1, 1);
}

.navbar h1{
  cursor: pointer;
}
</style>
