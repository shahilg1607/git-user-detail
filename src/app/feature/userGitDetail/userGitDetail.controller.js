export default class UserGitDetailController {
  constructor(userGitDetailService) {
    this.isUserDetailAvailable = false;
    this.userDetail = {};
    this.userGitDetailService = userGitDetailService;
    this.errorMessage = "";
  }

  fetchUserDetail(searchedText) {
    this.isUserDetailAvailable = false;
    this.errorMessage = "";
    this.userGitDetailService.fetchUserDetail(searchedText).then(
      response => {
        this.userGitDetailService
          .getUserRepos(response.data.repos_url)
          .then(reposResponse => {
            this.userDetail = {
              login: response.data.login,
              avatar_url: response.data.avatar_url,
              location: response.data.location,
              repos: reposResponse.data
            };
            this.isUserDetailAvailable = true;
          });
      },
      error => {
        this.errorMessage = `User with this username does not exist. Please try it again.`;
      }
    );
  }
}

UserGitDetailController.$inject = ["userGitDetailService"];
