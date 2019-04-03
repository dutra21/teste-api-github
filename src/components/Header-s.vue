<template>
  <div class="header">
    <div class="container">
      <img class="logo" alt="Github logo" src="../assets/logo.svg">
      <search></search>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';

export default {
  name: 'header-s',

  components: {
    Search,
  },
};
</script>

<style lang="scss">
.header{
  padding: 50px 0;
  background: #F7F4F2;

  .container{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo{
    width: 80px;
  }

  .search-component{
    width: 336px;
  }
}
</style>
