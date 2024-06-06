<template>
  <div class="modal-overlay" v-if="showModal" @click="closeModal">
    <div class="modal-content">
      <h2>Hoteru</h2>
      <p>This is a hotel reservation application</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    showModal: Boolean
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: gray;
  border-radius: 10px;
  padding: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-top: 0;
}

p {
  margin-top: 20px;
  text-align: center;
}
</style>
