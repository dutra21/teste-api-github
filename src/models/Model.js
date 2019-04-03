import { Model as BaseModel } from 'vue-api-query';

export default class Model extends BaseModel {
  // define a base url for a REST API
  // eslint-disable-next-line class-methods-use-this
  baseURL() {
    return 'https://developer.github.com/v3/';
  }

  // implement a default request method
  request(config) {
    return this.$http.request(config);
  }
}
