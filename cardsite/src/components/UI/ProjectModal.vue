<template>
  <div class="modal-overlay" v-if="showModal" @click="closeModal">
    <div class="modal-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    project: Object,
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
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
</style>
