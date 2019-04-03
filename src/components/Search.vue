<template>
  <div class="search-component">
    <label for="inputSearch">buscar</label>
    <div class="wrapper-input">
      <input v-model="text"
      type="text"
      name="search"
      id="inputSearch"
      placeholder="o que você procura?">
      <button class="btn-search" @click="sendSearch()">
        <span class="material-icons">search</span>
        </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'search',

  data() {
    return {
      text: null,
    };
  },

  methods: {
    sendSearch() { 
      if(this.text === null) {
        return
      }
      this.$emit('confirm', this.text)
    },
  },
};
</script>

<style lang="scss">
.search-component{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .btn-search{
    position: absolute;
    right: 0;
    padding: 0;
    top: 2px;

    span{
      font-size: 24px;
      color: #EC7000;
    }
  }

  input{
    width: 100%;
  }

  .wrapper-input{
    position: relative;
    width: 100%;
    margin-top: 15px;
  }
}
</style>
