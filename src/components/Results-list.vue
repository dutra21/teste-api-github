<template>
  <div class="results-list">
    <div class="container">
      <p class="results-total">Aproximadamente {{ users.length}} resultados</p>
      <div v-for="user in users" v-bind:key="user.id" class="card-result-list">
        <router-link :to="{ name : 'user', params: { login: user.login} }">
          <div class="wrapper-img-perfil">
            <img :src="user.avatar_url" alt="foto do usuário">
          </div>
          <div class="wrapper-description">
            <p class="text-title">{{ user.name }}</p>
            <p class="text-paragraph">{{ user.followers }} followers</p>
            <p class="text-paragraph">{{ user.following}} following</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'results-list',

  props: ['source'],

  data() {
    return {
      users: [],
      route_search: this.$route.params.search,
      sources: this.source,
    };
  },

  watch: {
    source() {
      this.sources = this.source;
      this.getUser();
    },
  },

  methods: {
    getUser() {
      let searchText;
      if (!this.sources === undefined || !this.sources === null) {
        searchText = this.sources;
      } else {
        searchText = this.route_search;
      }
      axios
        .get(`https://api.github.com/search/users?q=${searchText}`)
        .then((resp) => {
          const list = resp.data.items;
          const self = this;
          list.forEach((element) => {
            const url = element.url;
            axios
              .get(url)
              .then((response) => {
                self.users.push(response.data);
              });
          });
        });
    },
  },

  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss">
.results-list{
  .card-result-list a{
    display: flex;
    align-items: flex-start;
    text-decoration: none;
  }

  .card-result-list + .card-result-list{
    margin-top: 40px;
  }

  .wrapper-description{
    margin-left: 30px;
  }

  .wrapper-img-perfil{
    width: 144px;
    height: 144px;

    img{
      width: 144px;
      height: 144px;
      object-fit: cover;
    }

    @media screen and (max-width: 769px) {
      width: 120px;
      height: 120px;

      img{
        width: 120px;
        height: 120px;
      }
    }
  }

  .results-total{
    margin: 50px 0;
  }
}
</style>
