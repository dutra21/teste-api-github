<template>
  <div class="results">
    <div class="header">
      <div class="container">
        <img class="logo" alt="Github logo" src="../assets/logo.svg">
        <search @confirm="doSearch"></search>
      </div>
    </div>
    <results-list :source="search_text"></results-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ResultsList from '@/components/Results-list.vue';
import Search from '@/components/Search.vue';

export default {
  name: 'results',

  components: {
    ResultsList,
    Search,
  },

  data() {
    return {
      search_text: null,
    };
  },

  methods: {
    doSearch(search) {
      this.search_text = search;
    },
  },
};
</script>

<style lang="scss">
.results{
  padding-bottom: 50px;
}
</style>
