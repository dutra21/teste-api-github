<template>
  <div class="home">
    <div class="container">
      <img class="logo" alt="Github logo" src="../assets/logo.svg">
      <search @confirm="doSearch"></search>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';

export default {
  name: 'home',

  components: {
    Search,
  },

  methods: {
    doSearch(text) {
      const userName = text;
      this.$router.push({ path : `/results=${userName}` });
    },
  },
};
</script>

<style lang="scss">
.home{
  padding: 150px 0;
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;

    @media screen and (max-width: 769px) {
      width: 60%;
    }
  }
  .logo{
    width: 336px;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }

  .search-component{
    margin-top: 100px;
  }
}
</style>
