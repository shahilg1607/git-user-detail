class UserGitDetailService {
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  fetchUserDetail(userName) {
    return this.$http.get(`https://api.github.com/users/${userName}`);
  }

  getUserRepos(repos_url) {
    return this.$http.get(repos_url);
  }
}

UserGitDetailService.$inject = ["$http", "$q"];

export default UserGitDetailService;
