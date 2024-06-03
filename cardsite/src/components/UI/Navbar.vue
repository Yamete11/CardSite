<template>
<div class="navbar">
  <div class="navbar-title">
    <h1 @click="goHome()">My Navbar</h1>
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
  background-color: #2C3531;
  color: white;
  height: 8vh;
  box-sizing: border-box;
}

.navbar-links{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
}

.navbar-btn{
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
  border: solid 2px white;
  border-radius: 5px;
  padding: 10px;
  background-color: #2C3531;
  cursor: pointer;
}

.navbar h1{
  cursor: pointer
}
</style>