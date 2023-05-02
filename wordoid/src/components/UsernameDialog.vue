<template>
  <div class="input-dialog">
    <h2>{{ title }}</h2>
    <input type="text" placeholder="Create Username" v-model="inputValue" />
    <div class="buttons">
      <button @click="submit">OK</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    defaultValue: String,
  },
  data() {
    return {
      inputValue: this.defaultValue,
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.inputValue);
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.input-dialog {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.717);
}

.input-dialog input {
  background-color: black;
  font-size: 2rem;
  border-radius: 20px;
  height: 15vh;
  width: 40vw;
  border: solid rgb(83, 83, 83) 1px;
}

.buttons {
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
}

.buttons button {
  margin-right: 2vw;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: blue;
  border: none;
}
</style>
