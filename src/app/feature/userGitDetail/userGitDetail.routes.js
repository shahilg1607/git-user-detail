routes.$inject = ["$stateProvider"];

export default function routes($stateProvider) {
  $stateProvider.state("gituser", {
    url: "/",
    template: "<user-git-detail></user-git-detail>"
  });
}
