<template>
    <div v-if="loading" class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
  </template>
  
<script>
  export default {
    name: 'Loading',
    props: {
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #0026ff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  </style>
  