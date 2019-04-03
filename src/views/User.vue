<template>
  <div class="user">
    <div class="header">
      <div class="container">
        <img class="logo" alt="Github logo" src="../assets/logo.svg">
        <search @confirm="doSearch"></search>
      </div>
    </div>
    <div class="container">
      <!-- detalhe do perfil -->
      <div class="user-content">
        <div class="user-description">
          <div class="wrapper-img-perfil">
            <img :src="user.avatar_url" alt="foto do usuário">
          </div>
          <div class="wrapper-description">
            <p class="text-title">{{ user.name }}</p>
            <p class="text-paragraph">{{ user.followers }} followers</p>
            <p class="text-paragraph">{{ user.following}} following</p>
          </div>
          <div class="wrapper-bio">
            <p class="text-title">bio</p>
            <p class="text-paragraph">{{ user.bio }}</p>
          </div>
        </div>
        <!-- lista de repositórios -->
        <div class="repository-list">
          <p class="text-title">lista de repositórios</p>
          <div class="repository-card" v-for="repos in repositories" v-bind:key="repos.id">
            <div class="repository-card-top">
              <p class="repository-title">{{ repos.name }}</p>
              <button class="show-details" @click="isVisible(repos.name)">
                <span v-if="visible === true && collapse === repos.name">ver menos <i class="material-icons">expand_less</i></span>
                <span v-else>mais detalhes <i class="material-icons">expand_more</i></span>
              </button>
              <div v-if="visible === true && collapse === repos.name" class="repository-detail" >
                <p class="text-paragraph">{{ repos.description}}</p>
                <a :href="repos.html_url" target="_blank" class="repository-link">ir para repositório</a>
              </div>
            </div>
            <div class="repository-card-footer">
              <i class="material-icons">star</i> <p>{{ repos.stargazers_count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

// @ is an alias to /src
import Search from '@/components/Search.vue';

export default {
  name: 'user',

  components: {
    Search,
  },

  data() {
    return {
      user: [],
      repositories: [],
      route_login: this.$route.params.login,
      collapse: null,
      visible: false
    };
  },

  methods: {
    doSearch(text) {
      const userName = text;
      this.$router.push({ path : `/results=${userName}` });
    },

    getUser() {
      const username = this.route_login;
      let self = this;
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          self.user = response.data;
        });
    },

    getRepos() {
      const username = this.route_login;
      let self = this;
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          self.repositories = response.data;
        });
    },

    isVisible(name) {
      this.collapse = name;

      if (this.visible === false) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
  },

  mounted() {
    this.getUser();
    this.getRepos();
  },
}
</script>

<style lang="scss">
.user{
  padding-bottom: 50px;
  .user-content{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;

    @media screen and (max-width: 769px) {
      display: block;
    }
  }

  .user-description{
    margin-right: 50px;

    div + div{
      margin-top: 25px;
    }

    @media screen and (max-width: 769px) {
      margin-right: 0;
      margin-bottom: 50px;
    }
  }

  .wrapper-img-perfil{
    width: 240px;
    height: 240px;

    img{
      width: 100%;
      object-fit: contain;
    }
  }

  .repository-list{
    width: 100%;
  }

  .repository-card{
    padding: 25px;
    background: #F7F4F2;
  }

  .repository-card + .repository-card{
    margin-top: 20px;
  }

  .repository-title{
    font-size: 18px;
    font-weight: bold;
    margin: 0;

    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }

  a{
    font-size: 16px;
    font-weight: bold;
    color: #106EB0;
  }

  .repository-card-top{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    .repository-detail{
      width: 100%;
      margin-bottom: 15px;
    }
  }

  .repository-card-footer{
    display: flex;
    align-items: center;
    padding-top: 15px;

    p{
      margin: 0;
      font-size: 16px;
    }

    i{
      font-size: 18px;
      color: #106EB0;
          margin-right: 5px;
    }
  }
}
</style>
